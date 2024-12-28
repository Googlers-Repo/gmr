import { graphql } from "@octokit/graphql";
import fs from 'fs';

(async () => {
  const token = process.env.GITHUB_TOKEN;
  const query = `
    query {
      user(login: "DerGoogler") {
        sponsorshipsAsMaintainer(first: 100) {
          nodes {
            sponsorEntity {
              ... on User {
                login
                avatarUrl
                url
              }
              ... on Organization {
                login
                avatarUrl
                url
              }
            }
            tier {
              monthlyPriceInCents
            }
          }
        }
      }
    }
  `;

  try {
    const response = await graphql(query, {
      headers: {
        authorization: `token ${token}`,
      },
    });

    // Extract data and save it to sponsors.json
    const sponsors = response.user.sponsorshipsAsMaintainer.nodes.map((node) => ({
      login: node.sponsorEntity.login,
      avatarUrl: node.sponsorEntity.avatarUrl,
      url: node.sponsorEntity.url,
      amount: node.tier.monthlyPriceInCents / 100, // Convert cents to dollars
    }));

    fs.writeFileSync("./json/sponsors.json", JSON.stringify(sponsors, null, 2));
    console.log("Sponsors data fetched and saved successfully!");
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    process.exit(1);
  }
})();

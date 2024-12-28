const { graphql } = require("@octokit/graphql");
const fs = require("fs");

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

    const sponsors = response.user.sponsorshipsAsMaintainer.nodes.map((node) => ({
      login: node.sponsorEntity.login,
      avatarUrl: node.sponsorEntity.avatarUrl,
      url: node.sponsorEntity.url,
      amount: node.tier.monthlyPriceInCents / 100,
    }));

    fs.writeFileSync("json/sponsors.json", JSON.stringify(sponsors, null, 2));
    console.log("Sponsors data fetched and saved successfully!");
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    process.exit(1);
  }
})();

import requests
import json
import os

GRAPHQL_URL = "https://api.github.com/graphql"

GRAPHQL_QUERY = """
query {
  user(login: "DerGoogler") {
     sponsorshipsAsMaintainer(activeOnly: false, first: 100) {
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
"""

def fetch_sponsors(github_token):
    headers = {
        "Authorization": f"Bearer {github_token}",
        "Content-Type": "application/json"
    }

    response = requests.post(GRAPHQL_URL, json={"query": GRAPHQL_QUERY}, headers=headers)
    response.raise_for_status()

    return response.json()

def save_sponsors_to_file(sponsors_data, filename="json/sponsors.json"):
    print(sponsors_data)
    
    sponsors = [
        {
            "login": node["sponsorEntity"]["login"],
            "avatarUrl": node["sponsorEntity"]["avatarUrl"],
            "url": node["sponsorEntity"]["url"],
            "amount": node["tier"]["monthlyPriceInCents"]
        }
        for node in sponsors_data["data"]["user"]["sponsorshipsAsMaintainer"]["nodes"]
    ]
    
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    with open(filename, "w") as f:
        json.dump(sponsors, f, indent=2)

def main():
    github_token = os.getenv("GITHUB_TOKEN")
    if not github_token:
        raise ValueError("GitHub token is not set in environment variables")
    
    sponsors_data = fetch_sponsors(github_token)
    save_sponsors_to_file(sponsors_data)

if __name__ == "__main__":
    main()

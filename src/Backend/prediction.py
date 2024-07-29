import pandas as pd
import requests
from bs4 import BeautifulSoup
import os
# List of regions to fetch data for
regions = ["LCS+2024+Spring", "LEC+2024+Spring", "LCK+2024+Spring", "LPL+2024+Spring"]

# Base URL template for pick and ban history
url_template = "https://lol.fandom.com/wiki/Special:RunQuery/PickBanHistory?PBH%5Bpage%5D={}&PBH%5Bteam%5D=&PBH%5Btextonly%5D%5Bis_checkbox%5D=true&PBH%5Btextonly%5D%5Bvalue%5D=&_run=&pfRunQueryFormName=PickBanHistory&wpRunQuery=&pf_free_text="

# List to store DataFrames for each region
dfs = []

# Loop through each region and fetch the data
for region in regions:
    # Update the URL with the current region
    url = url_template.format(region)
    
    # Send a request to the page
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Find the table in the page
    table = soup.find('table', {'class': 'wikitable'})
    
    # Parse the table into a pandas DataFrame
    df = pd.read_html(str(table))[0]
    
    # Add a column for the region
    df['Region'] = region.replace('+', ' ')
    
    # Append the DataFrame to the list
    dfs.append(df)

# Concatenate all DataFrames into a single DataFrame
combined_df = pd.concat(dfs, ignore_index=True)

# Display the first few rows of the combined DataFrame
print(combined_df.head())

output_path = os.path.join(os.getcwd(), 'combined_draft_data.csv')

# Save to a CSV file
combined_df.to_csv(output_path, index=False)

# Print confirmation
print(f"CSV file saved to: {output_path}")
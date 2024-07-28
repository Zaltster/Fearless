import pandas as pd
import requests
from bs4 import BeautifulSoup

# List of regions to fetch data for
regions = ["LCS+2024+Spring", "LEC+2024+Spring"]

# Base URL template for pick and ban history
url_template = "https://lol.fandom.com/wiki/Special:RunQuery/PickBanHistory?PBH%5Bpage%5D={}&PBH%5Bteam%5D=&PBH%5Btextonly%5D%5Bis_checkbox%5D=true&PBH%5Btextonly%5D%5Bvalue%5D=&_run=&pfRunQueryFormName=PickBanHistory&wpRunQuery=&pf_free_text="

# Dictionary to store DataFrames for each region
region_data = {}

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
    
    # Store the DataFrame in the dictionary
    region_data[region] = df

# Display the first column for each region
for region, df in region_data.items():
    print(f"First column for {region.replace('+', ' ')}:")
    print(df.iloc[:, 6])  # .iloc[:, 0] selects the first column by index
    print()
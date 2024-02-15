from TikTokApi import TikTokApi
import asyncio
import os
import pandas as pd
from datetime import datetime
import time
from functools import partial, reduce

# Function definition remains the same...

async def main():
    brands = """
    theritzcarlton
    fairmonthotels
    aubergeresorts
    ihghotels
    hilton
    """.strip().split()

    # Fill in your specific date range (yyyy/m/d)
    since_date = datetime(2023, 1, 1)  # January 1, 2023
    until_date = datetime(2023, 12, 31)  # December 31, 2023

    # Parameters
    ms_token = os.environ.get("TIKTOK_MS_TOKEN", None)

    context_options = {
        'viewport': {'width': 1280, 'height': 1024},
        'user_agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
    }

    # Partial of function
    user_example_freez = partial(user_example, since_date=since_date, until_date=until_date) 

    tmp_save = []
    df = pd.DataFrame()

    for brand in brands:
        df = await user_example_freez(df, brand)
        tmp_save.append(df)

    brand_videos = pd.concat(tmp_save, ignore_index=True)

    # Convert the DataFrame to a JSON string
    json_data = brand_videos.to_json(orient='records')

    # Print the JSON data to stdout
    print(json_data)

if __name__ == "__main__":
    asyncio.run(main())

import requests
import time

def measure_load_time(url):

    start_time = time.time()
    try:
        response = requests.get(url)
        response.raise_for_status()
    except requests.RequestException as e:
        return f"An error occurred: {e}"
    end_time = time.time()
    load_time = end_time - start_time
    return load_time

url = "https://api.chucknorris.io/jokes/random"
load_time = measure_load_time(url)
print(f"Time taken to load {url}: {load_time:.4f} seconds")

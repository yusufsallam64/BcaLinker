from bs4 import BeautifulSoup
import requests
url = 'https://bca.schoology.com/home/upcoming_ajax'
r = requests.get(url)
soup = BeautifulSoup(r.text, features = "lxml")
splits = [item.split('=',1)[-1] for item in str(soup.script).split(';')]
filtered_splits = [item.replace('"','') for item in splits if 'json' in item and not 'xxx' in item]
links_to_jsons = ["https://bca.schoology.com" + item for item in    filtered_splits]
for item in links_to_jsons:
   r = requests.get(item)
   print(r.json())
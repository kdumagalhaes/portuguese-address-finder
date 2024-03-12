# from bs4 import BeautifulSoup
import requests

base_url = "https://www.codigo-postal.pt/"

first = input("first ")
second = input("second ")

# https://www.codigo-postal.pt/?cp4=4400&cp3=074
def search_address(postal_code_first_part, postal_code_second_part):
    request_url = f"{base_url}?cp4={postal_code_first_part}&cp3={postal_code_second_part}"
    r = requests.get(request_url)
    print(r.status_code)
    return request_url


print(search_address(first, second))

import requests
from bs4 import BeautifulSoup
import sys

base_url = "https://www.codigo-postal.pt/"

cep = sys.argv[1]

cep_first_part = cep[:4]
cep_second_part = cep[5:]

class Address:
    def __init__(self, street, local):
        self.street = street
        self.local = local

    def __str__(self):
        return f"Rua: {self.street}, Local: {self.local}"


def search_address(postal_code_first_part, postal_code_second_part):
    request_url = f"{base_url}?cp4={postal_code_first_part}&cp3={postal_code_second_part}"
    response = requests.get(request_url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, "html.parser")
        street_element = soup.find("a", class_="search-title")
        local_element = soup.find("span", class_="local")
        address_element = soup.find("p", class_="odd")

        if street_element and local_element:
            return Address(street_element.text.strip(), local_element.text.strip())
        else:
            return "Not found"


    else:
        raise RuntimeError("Erro ao buscar endereço: {}".format(response.status_code))


print(search_address(cep_first_part, cep_second_part))
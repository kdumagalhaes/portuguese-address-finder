import requests
from bs4 import BeautifulSoup

base_url = "https://www.codigo-postal.pt/"

first = input("first ")
second = input("second ")


def search_address(postal_code_first_part, postal_code_second_part):
    request_url = f"{base_url}?cp4={postal_code_first_part}&cp3={postal_code_second_part}"
    response = requests.get(request_url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, "html.parser")
        address_element = soup.find("p", class_="odd")

        if address_element:
            address_content = address_element.text.strip()
        else:
            address_content = "Not found"

        return address_content

    else:
        raise RuntimeError("Erro ao buscar endereço: {}".format(response.status_code))


search_address(first, second)

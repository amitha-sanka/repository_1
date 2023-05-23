import requests

url = "https://spotify23.p.rapidapi.com/search/"

querystring = {"q":"<REQUIRED>","type":"multi","offset":"0","limit":"10","numberOfTopResults":"5"}

headers = {
	"X-RapidAPI-Key": "8ca68e698emsh077b34dcb5cedc7p176bfdjsn4a11c2cb1bef",
	"X-RapidAPI-Host": "spotify23.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
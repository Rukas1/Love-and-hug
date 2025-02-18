import requests

def main():
	url = "https://rukas1.github.io/Love-and-hug"
	content = requests.get(url)
	print(content.status_code)

if __name__ == "__main__":
	main()

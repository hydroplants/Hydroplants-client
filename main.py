import requests

res = requests.get('https://flowing-aware-kangaroo.ngrok-free.app/api/data')

print(res.text)
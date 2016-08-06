import json, requests, pprint

url = 'https://getpocket.com/v3/get'


params = dict(
    resolved_title = 'resolved_title',
    consumer_key = '54288-1cbff625e4ad6f2ff32f144d',
	  access_token = '9636d93f-f2f2-dfdd-2238-8ab3ae'
)

data = requests.get(url=url, params=params)
binary = data.content
output = json.loads(binary)

# test to see if the request was valid
#print output['status']

# output all of the results
pprint.pprint(output)
import json

def lambda_handler(event, context):

    str = hello()
    return {
        'statusCode': 200,
        'body':json.dumps(str),
        'json1':event['key1']
    }

def hello():
    return "Hello World Test1"
import boto3

def connect_to_db():
    dynamo_client = boto3.client('dynamodb')
    return dynamo_client

def get_uni_items():
    db = connect_to_db()
    return db.scan(
        TableName='UniFind'
    )
   




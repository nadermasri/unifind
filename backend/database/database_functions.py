import boto3
import logging

def connect_to_db():
    dynamo_client = boto3.client('dynamodb')
    return dynamo_client

def get_unis_items():
    db = connect_to_db()
    try:
        return db.scan(
            TableName='UniFind'
        )
    except Exception as e:
        logging.error(f"Error scanning items from DynamoDB: {e}")
        return None

def get_uni_info(university_id):
    db = connect_to_db()
    try:
        response = db.get_item(
            TableName='UniFind',
            Key={
                'UniversityID': {'N':  str(university_id)}
            }
        )
        return response.get('Item', None)
    except Exception as e:
        logging.error(f"Error getting item from DynamoDB: {e}")
        return None



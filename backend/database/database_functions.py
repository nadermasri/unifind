import boto3
import logging

def connect_to_db():
    dynamo_client = boto3.client('dynamodb')
    return dynamo_client

def get_unis_items():
    db = connect_to_db()
    try:
        response = db.scan(TableName='UniFind')
        items = response.get('Items', [])
        logging.info(f"Items retrieved from DynamoDB: {items}")
        return items
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



def filter_universities(universities, criteria):
    acceptance_rate = criteria.get('acceptance_rate')
    financial_aid = criteria.get('financial_aid')
    location = criteria.get('location')
    ranking = criteria.get('ranking')
    accessibility_services = criteria.get('accessibility_services')
    grad_credit_cost = criteria.get('grad_credit_cost')
    undergrad_credit_cost = criteria.get('undergrad_credit_cost')
    language_taught = criteria.get('language_taught')
    research = criteria.get('research')

    if acceptance_rate is not None:
        universities = [uni for uni in universities if float(uni['AcceptanceRate']['N']) <= acceptance_rate]
    if financial_aid is not None:
        universities = [uni for uni in universities if uni['FinancialAid']['BOOL'] == financial_aid]
    if location:
        universities = [uni for uni in universities if uni['Location']['S'].lower() == location.lower()]
    if ranking is not None:
        universities = [uni for uni in universities if int(uni['Ranking_Lebanon']['N']) <= ranking]
    if accessibility_services is not None:
        universities = [uni for uni in universities if uni['AccessibilityServices']['BOOL'] == accessibility_services]
    if grad_credit_cost is not None:
        universities = [uni for uni in universities if float(uni['GradCreditCost']['N']) <= grad_credit_cost]
    if undergrad_credit_cost is not None:
        universities = [uni for uni in universities if float(uni['UndergradCreditCost']['N']) <= undergrad_credit_cost]
    if language_taught:
        universities = [uni for uni in universities if uni['LanguageTaught']['S'].lower() == language_taught.lower()]
    if research is not None:
        universities = [uni for uni in universities if uni['Research']['BOOL'] == research]
    
    return universities
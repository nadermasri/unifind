from flask import Flask, jsonify, request
from database.database_functions import get_uni_info, get_unis_items, filter_universities
import logging

app = Flask(__name__)
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
@app.route('/get-all-items', methods=['GET'])
def get_all_unis():
    try:
        data = get_unis_items()
        if data is None:
            logging.error("Failed to retrieve universities from database")
            return jsonify({"error": "Failed to retrieve universities from database"}), 500
        return jsonify(data)
    except Exception as e:
        logging.error(f"Error retrieving universities: {e}")
        return jsonify({"error": "An error occurred while retrieving universities"}), 500
    
@app.route('/get-NDU-info')
def get_ndu_info():
    try:
        data = get_uni_info(0)
        if data is None:
            logging.error("Failed to retrieve NDU information from database")
            return jsonify({"error": "Failed to retrieve NDU information from database"}), 500
        return jsonify(data)
    except Exception as e:
        logging.error(f"Error retrieving NDU information: {e}")
        return jsonify({"error": "An error occurred while retrieving NDU information"}), 500

@app.route('/get-AUB-info')
def get_aub_info():
    try:
        data = get_uni_info(1)
        if data is None:
            logging.error("Failed to retrieve AUB information from database")
            return jsonify({"error": "Failed to retrieve AUB information from database"}), 500
        return jsonify(data)
    except Exception as e:
        logging.error(f"Error retrieving AUB information: {e}")
        return jsonify({"error": "An error occurred while retrieving AUB information"}), 500

@app.route('/get-LAU-info')
def get_lau_info():
    try:
        data = get_uni_info(2)
        if data is None:
            logging.error("Failed to retrieve LAU information from database")
            return jsonify({"error": "Failed to retrieve LAU information from database"}), 500
        return jsonify(data)
    except Exception as e:
        logging.error(f"Error retrieving LAU information: {e}")
        return jsonify({"error": "An error occurred while retrieving LAU information"}), 500

@app.route('/get-BAU-info')
def get_bau_info():
    try:
        data = get_uni_info(3)
        if data is None:
            logging.error("Failed to retrieve BAU information from database")
            return jsonify({"error": "Failed to retrieve BAU information from database"}), 500
        return jsonify(data)
    except Exception as e:
        logging.error(f"Error retrieving BAU information: {e}")
        return jsonify({"error": "An error occurred while retrieving BAU information"}), 500

@app.route('/get-USJ-info')
def get_usj_info():
    try:
        data = get_uni_info(4)
        if data is None:
            logging.error("Failed to retrieve USJ information from database")
            return jsonify({"error": "Failed to retrieve USJ information from database"}), 500
        return jsonify(data)
    except Exception as e:
        logging.error(f"Error retrieving USJ information: {e}")
        return jsonify({"error": "An error occurred while retrieving USJ information"}), 500

@app.route('/filter-universities', methods=['POST'])
def filter_universities_route():
    try:
        criteria = request.get_json()
        
        criteria.setdefault('acceptance_rate', None)
        criteria.setdefault('financial_aid', None)
        criteria.setdefault('location', None)
        criteria.setdefault('ranking', None)
        criteria.setdefault('accessibility_services', None)
        criteria.setdefault('grad_credit_cost', None)
        criteria.setdefault('undergrad_credit_cost', None)
        criteria.setdefault('language_taught', None)
        criteria.setdefault('research', None)
        
        universities = get_unis_items()
        logging.info(f"Retrieved universities: {universities}")
        if universities is None:
            logging.error("Failed to retrieve universities from database")
            return jsonify({"error": "Failed to retrieve universities from database"}), 500
        
        filtered_universities = filter_universities(universities, criteria)
        return jsonify(filtered_universities)
    except Exception as e:
        logging.error(f"Error filtering universities: {e}")
        return jsonify({"error": "An error occurred while filtering universities"}), 500

if __name__ == '__main__':
    app.run()
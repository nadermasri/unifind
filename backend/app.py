from flask import Flask
from database.database_functions import get_unis_items, get_uni_info
from flask import Flask, jsonify


app = Flask(__name__)

@app.route('/get-all-items')
def get_all_unis():
    data = get_unis_items()
    return jsonify(data)

@app.route('/get-NDU-info')
def get_ndu_info():
    data = get_uni_info(0)
    return jsonify(data)

@app.route('/get-AUB-info')
def get_aub_info():
    data = get_uni_info(1)
    return jsonify(data)

@app.route('/get-LAU-info')
def get_lau_info():
    data = get_uni_info(2)
    return jsonify(data)

@app.route('/get-BAU-info')
def get_bau_info():
    data = get_uni_info(3)
    return jsonify(data)

@app.route('/get-USJ-info')
def get_usj_info():
    data = get_uni_info(4)
    return jsonify(data)


if __name__ == '__main__':
    app.run()
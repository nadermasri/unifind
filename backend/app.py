from flask import Flask
from database.database_functions import get_uni_items
from flask import Flask, jsonify


app = Flask(__name__)

@app.route('/get-all-items')
def get_uni_info():
    data = get_uni_items()
    return jsonify(data)


if __name__ == '__main__':
    app.run()
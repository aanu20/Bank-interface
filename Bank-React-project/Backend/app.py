from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

all_data = []
money_data = []
@app.route('/login', methods=['POST', 'OPTIONS'])
def login():
    if request.method == 'OPTIONS':
        # Handle preflight request
        return jsonify({"message": "Preflight OK"}), 200

    if request.method == "POST":
        data = request.get_json()
        if data and "username" in data:
            print("Received data:", data["username"])
            return jsonify({"message": "Login successful", "username": data["username"]}), 200
        return jsonify({"error": "Invalid data format"}), 400
    return jsonify({"message": "Method not allowed"}), 405

@app.route('/create', methods=['POST', 'GET'])
def index():
    if request.method == "POST":
        data = request.get_json()
        if data and "phone" in data:
            all_data.append(data)
            print("Received data:", data["phone"])
            return jsonify(data), 201
        return jsonify({"error": "Invalid data format"}), 400
    return jsonify(all_data if all_data else {"message": "Page ready"}), 200

@app.route("/moneydata", methods=['POST', 'GET'])
def money():
    if request.method == 'POST':
        data = request.get_json()
        if data:
            money_data.append(data)
            print("Received data:", data)
            return jsonify(data), 201
        return jsonify({"error": "No data provided"}), 400
    return jsonify(money_data if money_data else {"message": "Page ready"}), 200

@app.route("/moneydata/last", methods=['GET'])
def get_last_money():
    if money_data:
        return jsonify(money_data[-1]), 200
    return jsonify({"message": "No data available"}), 404

@app.route("/phone", methods=['GET'])
def get_phone():
    if all_data:
        try:
            phone_number = all_data[-1]["phone"]
            return jsonify({"phone": phone_number}), 200
        except KeyError:
            return jsonify({"message": "No phone number found"}), 404
    return jsonify({"message": "No data available"}), 404

if __name__ == "__main__":
    app.run(debug=True)

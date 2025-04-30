from flask import Flask ,render_template,request,jsonify
from flask_cors import CORS
app=Flask(__name__)
CORS(app)
all_data=[]
money_data=[]
@app.route('/create' ,methods=['POST','GET'])
def index():
    if request.method == "POST":
        data = request.get_json()
        all_data.append(data)
        print("Received data:", data)
        return jsonify(data)
    return jsonify(all_data if all_data else {"message": "Page ready"})

@app.route("/moneydata",methods=['POST','GET'])
def money():
    if request.method=='POST':
        data = request.get_json()
        money_data.append(data)
        print("Received data:", data)
        return jsonify(data)
    return jsonify(money_data if money_data else {"message": "Page ready"})

@app.route("/moneydata/last", methods=['GET'])
def get_last_money():
    if money_data:
        return jsonify(money_data[-1])
    return jsonify({"message": "No data available"}), 404

if __name__=="__main__":
    app.run(debug=True)
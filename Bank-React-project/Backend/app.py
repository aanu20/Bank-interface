from flask import Flask ,render_template,request,jsonify
from flask_cors import CORS
app=Flask(__name__)
CORS(app)
all_data=[]
@app.route('/create' ,methods=['POST','GET'])
def index():
    if request.method == "POST":
        data = request.get_json()
        all_data.append(data)
        print("Received data:", data)
        return jsonify(data)
    return jsonify(all_data if all_data else {"message": "Page ready"})
if __name__=="__main__":
    app.run(debug=True)
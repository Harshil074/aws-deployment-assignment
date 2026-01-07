from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Flask Backend is running successfully"
    })

@app.route("/api/data", methods=["GET"])
def get_data():
    return jsonify({
        "status": "success",
        "data": [
            {"id": 1, "name": "AWS"},
            {"id": 2, "name": "Docker"},
            {"id": 3, "name": "ECS"}
        ]
    })

@app.route("/api/add", methods=["POST"])
def add_item():
    data = request.json
    return jsonify({
        "message": "Item received",
        "item": data
    }), 201

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

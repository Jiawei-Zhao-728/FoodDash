from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Mock database (replace with real database later)
restaurants = []
menu_items = []
orders = []

@app.route("/api/restaurants", methods=["GET"])
def get_restaurants():
    return jsonify(restaurants)

@app.route("/api/restaurants/<int:restaurant_id>", methods=["GET"])
def get_restaurant_details(restaurant_id):
    restaurant = next((r for r in restaurants if r["id"] == restaurant_id), None)
    if not restaurant:
        return jsonify({"error": "Restaurant not found"}), 404
    return jsonify(restaurant)

@app.route("/api/restaurants/<int:restaurant_id>/menu", methods=["GET"])
def get_restaurant_menu(restaurant_id):
    items = [item for item in menu_items if item["restaurant_id"] == restaurant_id]
    return jsonify(items)

@app.route("/api/orders", methods=["GET", "POST"])
def handle_orders():
    if request.method == "GET":
        user_id = request.args.get("user_id")
        if user_id:
            user_orders = [order for order in orders if order["user_id"] == user_id]
            return jsonify(user_orders)
        return jsonify(orders)
    
    if request.method == "POST":
        order_data = request.json
        if not order_data:
            return jsonify({"error": "Missing order data"}), 400
        
        # Add validation here
        new_order = {
            "id": len(orders) + 1,
            **order_data,
            "status": "pending"
        }
        orders.append(new_order)
        return jsonify(new_order), 201

@app.route("/api/orders/<int:order_id>", methods=["GET", "PUT"])
def handle_order(order_id):
    order = next((o for o in orders if o["id"] == order_id), None)
    if not order:
        return jsonify({"error": "Order not found"}), 404

    if request.method == "GET":
        return jsonify(order)
    
    if request.method == "PUT":
        update_data = request.json
        if not update_data:
            return jsonify({"error": "Missing update data"}), 400
        
        # Add validation here
        order.update(update_data)
        return jsonify(order)

if __name__ == "__main__":
    app.run(debug=True, port=5000)

from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

FSQ_API_KEY = os.getenv("REACT_APP_FSQ_API_KEY")

@app.route("/")
def index():
    return jsonify({"message": "Food Dash Flask Backend is Running!"})

@app.route("/api/restaurants", methods=["GET"])
def get_restaurants():
    # Get the 'location' parameter from query string (e.g., "Brooklyn")
    location = request.args.get("location")
    if not location:
        return jsonify({"error": "Missing 'location' parameter"}), 400

    # Set up the Foursquare API URL and parameters
    url = "https://api.foursquare.com/v3/places/search"
    params = {
        "near": location,         # use location name
        "query": "restaurant",    # filter for restaurants
        "categories": "13065",    # Category ID for restaurants
        "sort": "POPULARITY",     # sort by popularity
        "limit": 20               # limit the number of results
    }
    headers = {
        "Accept": "application/json",
        "Authorization": FSQ_API_KEY
    }
    
    # Make the request to Foursquare Places API
    try:
        response = requests.get(url, params=params, headers=headers)
        response.raise_for_status()  # Raise an error for bad responses
        data = response.json()
        return jsonify(data)
    except requests.RequestException as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
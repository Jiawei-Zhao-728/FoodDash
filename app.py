from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

FOURSQUARE_API_KEY = os.getenv("FSQ_API_KEY")
FOURSQUARE_API_URL = "https://api.foursquare.com/v3/places/search"

HEADERS = {
    "Accept": "application/json",
    "Authorization": FOURSQUARE_API_KEY
}

@app.route("/search", methods=["POST"])
def search_restaurants():
    data = request.get_json()
    location = data.get("location")

    if not location:
        return jsonify({"error": "Missing location"}), 400

    # Use geocoding to get lat/lng from location name (hardcoded example or optional step)
    geocode_url = f"https://nominatim.openstreetmap.org/search?q={location}&format=json"
    geo_response = requests.get(geocode_url)
    if geo_response.status_code != 200 or not geo_response.json():
        return jsonify({"error": "Failed to geocode location"}), 400

    geo_data = geo_response.json()[0]
    latitude = geo_data["lat"]
    longitude = geo_data["lon"]

    params = {
        "ll": f"{latitude},{longitude}",
        "radius": 10000,
        "categories": "13065",  # Food category
        "limit": 20,
        "sort": "DISTANCE"
    }

    response = requests.get(FOURSQUARE_API_URL, headers=HEADERS, params=params)

    if response.status_code != 200:
        return jsonify({"error": "Foursquare API error"}), 500

    return jsonify(response.json())

if __name__ == "__main__":
    app.run(debug=True)

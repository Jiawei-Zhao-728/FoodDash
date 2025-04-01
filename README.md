# 🍽️ Food Dash – Discover Local Eats 🌆

## 📊 Project Overview

Food Dash is a **modern React web application** designed to help users easily discover, compare, and explore local restaurants and eateries. By leveraging the Foursquare Places API, Food Dash provides up-to-date, curated restaurant listings sorted by popularity and quality. Our goal is to transform the dining experience by making restaurant discovery interactive, intuitive, and efficient.

## 🔍 Key Features

- **Smart Location Search:**  
  Quickly find top restaurants in any specified city using dynamic location-based search.
- **Detailed Venue Information:**  
  View restaurant details including address, ratings, and user reviews.
- **Interactive UI:**  
  Enjoy a clean, responsive interface built with React and Material UI, featuring a two-column layout with a search panel and results display.
- **Real-Time Data:**  
  Retrieve live data directly from Foursquare through a secure Flask backend.
- **Secure Backend Integration:**  
  A Flask-based API service acts as a proxy between the frontend and Foursquare, protecting your API key and managing data requests.

## 🛠 Technical Architecture

Food Dash is built with:

- **Frontend:** React and Material UI for a modern, responsive interface.
- **Backend:** Flask (with Flask-CORS) to securely fetch data from the Foursquare Places API.
- **Data Source:** Foursquare Places API (using both Autocomplete and Search endpoints) for accurate restaurant data.
- **HTTP Client:** Axios for seamless API calls.
- **Styling:** CSS, Material UI, and Custom Hooks.

### Data Flow Overview:

1. **User Input:**  
   A user enters a location into the search bar.
2. **API Request:**  
   The React application sends the location to the Flask backend (using the `location` parameter).
3. **Backend Processing:**  
   The Flask backend calls the Foursquare API using the secure API key stored in environment variables, processes and filters the data.
4. **Data Delivery:**  
   The processed data is returned to the React frontend.
5. **Display:**  
   Results are rendered on the right side of the screen in a card-based, scrollable layout.

## 🚀 Current Progress

- **Search Component:**
  - Implemented a dynamic search that leverages the Flask backend to securely fetch restaurant data from Foursquare.
  - Integrated location suggestions and filters to ensure the app returns top restaurants in the specified area.
- **Results Display:**
  - Developed a two-column layout with the search UI on the left and restaurant results on the right.
  - Results are displayed in clean, card-based components showing key details like restaurant name and address.
- **Backend Integration:**
  - Built a Flask backend that securely retrieves restaurant data using environment variables to store the Foursquare API key.
  - Configured the backend to handle CORS requests, allowing the React frontend to communicate seamlessly.
- **UI & Styling:**
  - The interface is responsive, leveraging Material UI and Framer Motion for smooth animations and transitions.

## ⚠️ Challenges & Solutions

- **Accurate Location Filtering:**  
  Initially, using the `query` parameter returned venues with the location name in their title rather than those located in the area. Switching to the `near` parameter (with additional keyword filtering) resolved this issue.
- **API Key Security:**  
  The API key is stored in environment variables and loaded securely on the backend using `python-dotenv`. This prevents accidental exposure in the client-side code.
- **Dynamic Layout Management:**  
  Ensured a responsive two-column layout that remains user-friendly on all devices.

## 🔮 Future Enhancements & Roadmap

- **Advanced Filtering:**  
  Further refine search filters by cuisine type, ratings, and additional parameters.
- **Enhanced Backend Features:**
  - Implement caching to reduce redundant API calls.
  - Integrate a database for storing user data, favorites, and historical search analytics.
- **Enhanced UI:**  
  Add richer details to restaurant cards such as images, menus, and comprehensive reviews.
- **User Accounts & Reviews:**  
  Implement authentication to allow personalized user experiences, including favorites and detailed restaurant reviews.

## 📥 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Jiawei-Zhao-728/FoodDash.git
cd FoodDash
```

### 2️⃣ Install Dependencies

For the **React frontend**:

```bash
npm install
```

For the **Flask backend** (ensure you have Python 3 installed):

```bash
python3 -m venv venv
source venv/bin/activate   # On Windows, use: venv\Scripts\activate
pip install Flask Flask-Cors requests python-dotenv
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory with:

```
REACT_APP_FSQ_API_KEY=YOUR_FSQ_API_KEY
FSQ_API_KEY=YOUR_FSQ_API_KEY
```

_Ensure that `.env` is added to your `.gitignore` to protect your API key._

### 4️⃣ Start the Development Servers

- **Flask Backend:**

  ```bash
  python3 app.py
  ```

  Your backend will run at `http://127.0.0.1:5000`.

- **React Frontend:**  
  In a separate terminal, run:
  ```bash
  npm start
  ```
  Your application will be running at [http://localhost:3000](http://localhost:3000).

## 📸 Screenshots & Demo

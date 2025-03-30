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
  Retrieve live data directly from Foursquare to ensure that users get the most current restaurant information.

## 🛠 Technical Architecture

Food Dash is built with:
- **Frontend:** React and Material UI for a modern, responsive interface.
- **Data Source:** Foursquare Places API (using both Autocomplete and Search endpoints) for accurate restaurant data.
- **HTTP Client:** Axios for seamless API calls.
- **Styling:** CSS, Material UI, and Custom Hooks.

### Data Flow Overview:
1. **User Input:** A user enters a location into the search bar.
2. **API Request:** The application sends a request to Foursquare’s API using the `near` parameter (or geocoded coordinates) to fetch nearby restaurants.
3. **Data Processing:** The response is filtered, sorted (e.g., by popularity), and stored in local state.
4. **Display:** Results are rendered on the right side of the screen in a card-based, scrollable layout.

*(Insert diagram or flowchart here if available)*

## 🚀 Current Progress

- **Search Component:**  
  - Implemented a dynamic search that uses the Foursquare Places API.
  - Integrated location suggestions and filters to ensure the app returns top restaurants in a given area.
- **Results Display:**  
  - Developed a two-column layout with the search UI on the left and restaurant results on the right.
  - Results are displayed in clean, card-based components showing key details like restaurant name and address.
- **API Integration:**  
  - Successfully integrated Foursquare's Autocomplete and Search endpoints.
  - Adjusted filtering parameters to display only relevant restaurant data sorted by popularity.
- **UI & Styling:**  
  - The interface is responsive, leveraging Material UI and Framer Motion for smooth animations and transitions.

## ⚠️ Challenges & Solutions

- **Accurate Location Filtering:**  
  Initially, using the `query` parameter returned venues with the location name in their title rather than those located in the area. Switching to the `near` parameter (with additional keyword filtering) resolved this issue.
- **API Key Security:**  
  Environment variables are used to securely store the Foursquare API key. Future plans include backend integration to further protect sensitive information.
- **Dynamic Layout Management:**  
  Ensured a responsive two-column layout that remains user-friendly on all devices.

## 🔮 Future Enhancements & Roadmap

- **Advanced Filtering:**  
  Further refine search filters by cuisine type, ratings, and additional parameters.
- **Backend Integration:**  
  Develop a secure backend (e.g., with Node.js/Express) to handle API requests and safeguard your API key.
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

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory with:
```
REACT_APP_FSQ_API_KEY=YOUR_FSQ_API_KEY
```
*Ensure that `.env` is added to your `.gitignore` to protect your API key.*

### 4️⃣ Start the Development Server

```bash
npm start
```

Your application will be running at [http://localhost:3000](http://localhost:3000).

## 📸 Screenshots & Demo

*(Insert screenshots or GIFs of the search interface, results display, and overall layout here)*

## 🤝 Contributions & Contact

This project is open-source under the MIT License. Contributions and feedback are welcome!

- **GitHub Repository:** [Food Dash](https://github.com/Jiawei-Zhao-728/FoodDash)
- **Contact:** [your.email@example.com](mailto:your.email@example.com)

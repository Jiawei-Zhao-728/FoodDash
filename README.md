# 🎬 Movie Magic – Your Ultimate Movie Discovery Platform

## 📊 Project Overview

Movie Magic is a **modern React web application** designed to help users discover, explore, and review movies and TV shows. By leveraging the TMDb (The Movie Database) API, Movie Magic provides up-to-date information about movies, including details, ratings, cast information, and trailers. Our goal is to enhance the movie discovery experience by making it interactive, intuitive, and engaging.

## 🔍 Key Features

- **Smart Movie Search:**  
  Search for movies by title, genre, or release date with dynamic filtering options.
- **Detailed Movie Information:**  
  View comprehensive movie details including synopsis, ratings, cast, crew, and trailers.
- **User Reviews & Ratings:**  
  Write and submit reviews for movies, and rate them using a 5-star system.
- **User Accounts:**  
  Create personal accounts to save favorite movies and manage review history.
- **Trending Content:**  
  Stay updated with sections for trending movies, popular shows, and upcoming releases.
- **Favorites List:**  
  Create and manage a personalized list of favorite movies for future reference.

## 🛠 Technical Architecture

Movie Magic is built with:

- **Frontend:** React and Material UI for a modern, responsive interface
- **Backend:** Flask (with Flask-CORS) to securely fetch data from the TMDb API
- **Data Source:** TMDb API for comprehensive movie data and metadata
- **Authentication:** Firebase for user authentication and profile management
- **HTTP Client:** Axios for seamless API calls
- **Styling:** CSS, Material UI, and Custom Hooks

### Data Flow Overview:

1. **User Input:**  
   Users can search for movies or browse trending content.
2. **API Request:**  
   The React application sends requests to the Flask backend.
3. **Backend Processing:**  
   The Flask backend communicates with TMDb API using secure API keys.
4. **Data Delivery:**  
   Processed movie data is returned to the React frontend.
5. **Display:**  
   Results are rendered in a modern, card-based layout with detailed views.

## 🚀 Current Progress

- **Search Component:**
  - Implemented dynamic movie search with filters for genre and release date
  - Added auto-suggestions for movie titles
- **Movie Details:**
  - Created detailed movie views with cast information and trailers
  - Integrated user reviews and ratings system
- **Backend Integration:**
  - Built a Flask backend that securely retrieves movie data
  - Implemented caching for frequently accessed data
- **User Features:**
  - Added user authentication with Firebase
  - Implemented favorites list functionality

## ⚠️ Challenges & Solutions

- **API Rate Limiting:**  
  Implemented caching strategies to optimize API calls and stay within rate limits.
- **Data Organization:**  
  Created a structured approach to handle the rich movie metadata from TMDb.
- **User Experience:**  
  Designed an intuitive interface for seamless movie discovery and interaction.

## 🔮 Future Enhancements

- **Advanced Filtering:**  
  Add more sophisticated search filters including cast, crew, and user ratings.
- **Personalization:**  
  Implement AI-powered movie recommendations based on user preferences.
- **Social Features:**  
  Add ability to share reviews and create watch parties.
- **Watch Providers:**  
  Integrate streaming service availability information.

## 📥 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/movie-magic.git
cd movie-magic
```

### 2️⃣ Install Dependencies

For the **React frontend**:

```bash
npm install
```

For the **Flask backend**:

```bash
python3 -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate
pip install Flask Flask-CORS requests python-dotenv
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```
TMDB_API_KEY=your_tmdb_api_key
REACT_APP_FIREBASE_CONFIG=your_firebase_config
```

### 4️⃣ Start the Development Servers

**Flask Backend:**

```bash
python3 app.py
```

**React Frontend:**

```bash
npm start
```

Your application will be running at [http://localhost:3000](http://localhost:3000).

## 📸 Screenshots & Demo

[Coming Soon]

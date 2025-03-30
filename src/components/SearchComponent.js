import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import axios from "axios";

const SearchComponent = ({ placeholder, onSearch, sidebarOpen }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "https://api.foursquare.com/v3/places/search",
        {
          params: {
            near: query, // Use the user's input as the location (e.g., "Brooklyn")
            query: "restaurant", // Ensures that the results relate to restaurants
            categories: "13065", // Category ID for restaurants (adjust if needed)
            sort: "POPULARITY", // Sort by popularity
            limit: 20, // Limit number of results
          },
          headers: {
            Accept: "application/json",
            Authorization: process.env.REACT_APP_FSQ_API_KEY,
          },
        }
      );
      console.log("Foursquare API response:", response.data);
      // Optionally, update a state variable to display the results in your UI.
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  return (
    <motion.div
      animate={{
        paddingLeft: sidebarOpen ? "240px" : "80px", // Smooth movement with sidebar
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      style={{
        width: "600px", // Keeps search bar size fixed
        maxWidth: "90%", // Ensures it doesn't shrink too much on small screens
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{ fontWeight: "600", fontSize: "2.5rem", color: "#222" }}
      >
        🌍 Food Dash
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: "300",
          fontSize: "1.3rem",
          color: "#666",
          marginBottom: "15px",
        }}
      >
        Discover, Compare, and Enjoy the Best Local Eats 🍽️
      </Typography>

      {/* Horizontal Line */}
      <Divider
        sx={{ width: "100%", marginBottom: "15px", borderColor: "#e0e0e0" }}
      />

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%", // Prevents shrinking
          maxWidth: "600px", // Keeps size constant
          borderRadius: "30px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
        }}
      >
        <TextField
          label={placeholder || "🏙️ Search Up!"}
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{
            width: "100%", // Fix width
            borderRadius: "30px",
            backgroundColor: "white",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
              padding: "12px 20px",
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ff9800",
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#ff9800",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </motion.div>
  );
};

export default SearchComponent;

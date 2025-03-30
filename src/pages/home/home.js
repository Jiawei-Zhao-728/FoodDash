import React from "react";
import { Box } from "@mui/material";
import SearchComponent from "../../components/SearchComponent";
import homeStyles from "./homeStyles";
import "@fontsource/roboto";

function Home() {
  return (
    <Box sx={homeStyles.container}>
      {/* Adjusted Main Content Position (Using Golden Ratio) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          height: "100vh",
          paddingLeft: "80px", // Adjust padding so movement is smooth
          transition: "padding-left 0.3s ease-in-out",
        }}
      >
        {/* Search Component (Title, Subtitle, and Search Bar) */}
        <SearchComponent placeholder="🏙️ Search City Name..." />
      </Box>
    </Box>
  );
}

export default Home;

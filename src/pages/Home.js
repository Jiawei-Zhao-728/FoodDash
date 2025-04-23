import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  // Mock featured restaurants (replace with API data later)
  const featuredRestaurants = [
    {
      id: 1,
      name: "Burger Palace",
      image: "https://source.unsplash.com/800x600/?burger",
      cuisine: "American",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Pizza Heaven",
      image: "https://source.unsplash.com/800x600/?pizza",
      cuisine: "Italian",
      rating: 4.3,
    },
    {
      id: 3,
      name: "Sushi Master",
      image: "https://source.unsplash.com/800x600/?sushi",
      cuisine: "Japanese",
      rating: 4.7,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Delicious Food Delivered
          </Typography>
          <Typography variant="h5" component="h2" sx={{ mb: 4 }}>
            Order from the best restaurants in your area
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate("/restaurants")}
          >
            Browse Restaurants
          </Button>
        </Container>
      </Box>

      {/* Featured Restaurants */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Restaurants
        </Typography>
        <Grid container spacing={4}>
          {featuredRestaurants.map((restaurant) => (
            <Grid item key={restaurant.id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: "100%", cursor: "pointer" }}
                onClick={() => navigate(`/restaurants/${restaurant.id}`)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={restaurant.image}
                  alt={restaurant.name}
                />
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {restaurant.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {restaurant.cuisine}
                  </Typography>
                  <Typography color="primary">
                    ★ {restaurant.rating.toFixed(1)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

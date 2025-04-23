import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

const RestaurantList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  const { data: restaurants, isLoading } = useQuery(
    ["restaurants", searchQuery],
    async () => {
      const response = await fetch(
        `http://localhost:5000/api/restaurants${
          searchQuery ? `?search=${searchQuery}` : ""
        }`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch restaurants");
      }
      return response.json();
    }
  );

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : "All Restaurants"}
      </Typography>

      <Grid container spacing={4}>
        {restaurants?.map((restaurant) => (
          <Grid item key={restaurant.id} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", cursor: "pointer" }}
              onClick={() => navigate(`/restaurants/${restaurant.id}`)}
            >
              <CardMedia
                component="img"
                height="200"
                image={
                  restaurant.image ||
                  `https://source.unsplash.com/800x600/?restaurant-${restaurant.id}`
                }
                alt={restaurant.name}
              />
              <CardContent>
                <Typography variant="h6" component="h2">
                  {restaurant.name}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  {restaurant.cuisine}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {restaurant.description}
                </Typography>
                <Typography color="primary" sx={{ mt: 1 }}>
                  ★ {restaurant.rating?.toFixed(1) || "4.0"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RestaurantList;

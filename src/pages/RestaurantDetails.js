import React from "react";
import { useParams } from "react-router-dom";
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
  Button,
  Divider,
  Paper,
} from "@mui/material";
import { toast } from "react-toastify";

const RestaurantDetails = () => {
  const { id } = useParams();

  const { data: restaurant, isLoading: isLoadingRestaurant } = useQuery(
    ["restaurant", id],
    async () => {
      const response = await fetch(
        `http://localhost:5000/api/restaurants/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch restaurant details");
      }
      return response.json();
    }
  );

  const { data: menuItems, isLoading: isLoadingMenu } = useQuery(
    ["menu", id],
    async () => {
      const response = await fetch(
        `http://localhost:5000/api/restaurants/${id}/menu`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch menu");
      }
      return response.json();
    }
  );

  const handleAddToCart = (item) => {
    // TODO: Implement cart functionality
    toast.success(`Added ${item.name} to cart`);
  };

  if (isLoadingRestaurant || isLoadingMenu) {
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
      {/* Restaurant Header */}
      <Paper sx={{ mb: 4, overflow: "hidden" }}>
        <Box sx={{ position: "relative", height: 200 }}>
          <CardMedia
            component="img"
            height="200"
            image={
              restaurant?.image ||
              `https://source.unsplash.com/1200x400/?restaurant-${id}`
            }
            alt={restaurant?.name}
            sx={{ objectFit: "cover" }}
          />
        </Box>
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {restaurant?.name}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            {restaurant?.cuisine}
          </Typography>
          <Typography variant="body1" paragraph>
            {restaurant?.description}
          </Typography>
          <Typography color="primary">
            ★ {restaurant?.rating?.toFixed(1) || "4.0"}
          </Typography>
        </Box>
      </Paper>

      {/* Menu Section */}
      <Typography variant="h5" component="h2" gutterBottom>
        Menu
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={4}>
        {menuItems?.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="160"
                image={
                  item.image ||
                  `https://source.unsplash.com/800x600/?food-${item.id}`
                }
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h6" component="h3">
                  {item.name}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {item.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" color="primary">
                    ${item.price.toFixed(2)}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RestaurantDetails;

import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

const Cart = () => {
  // TODO: Implement cart state management
  const cartItems = [];
  const total = 0;

  const handleRemoveItem = (itemId) => {
    // TODO: Implement remove item functionality
  };

  const handleCheckout = () => {
    // TODO: Implement checkout functionality
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            Your cart is empty
          </Typography>
        </Box>
      ) : (
        <>
          <Card sx={{ mb: 4 }}>
            <List>
              {cartItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  {index > 0 && <Divider />}
                  <ListItem>
                    <ListItemText
                      primary={item.name}
                      secondary={`$${item.price.toFixed(2)} × ${item.quantity}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Card>

          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
            <Typography variant="h5">Total:</Typography>
            <Typography variant="h5">${total.toFixed(2)}</Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;

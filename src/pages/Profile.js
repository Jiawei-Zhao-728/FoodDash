import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

function Profile() {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profile
        </Typography>
        <Paper sx={{ p: 3, mt: 2 }}>
          <Typography variant="body1">
            Profile page is under construction. Coming soon!
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default Profile;

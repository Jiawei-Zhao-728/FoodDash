import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Box,
  Rating,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/movies/${id}`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch movie details");
        setLoading(false);
        console.error("Error fetching movie details:", err);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (error || !movie) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Typography color="error">{error || "Movie not found"}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          position: "relative",
          height: "70vh",
          mb: 4,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={`${imageBaseUrl}${movie.backdrop_path}`}
          alt={movie.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
            p: 4,
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            {movie.title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Rating value={movie.vote_average / 2} precision={0.5} readOnly />
            <Typography>
              {movie.vote_average.toFixed(1)} ({movie.vote_count} votes)
            </Typography>
            <Typography>•</Typography>
            <Typography>
              {new Date(movie.release_date).getFullYear()}
            </Typography>
            <Typography>•</Typography>
            <Typography>
              {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            {movie.genres.map((genre) => (
              <Chip key={genre.id} label={genre.name} color="primary" />
            ))}
          </Box>
        </Box>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>
            Overview
          </Typography>
          <Typography paragraph>{movie.overview}</Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" gutterBottom>
            Cast
          </Typography>
          <Grid container spacing={2}>
            {movie.credits.cast.slice(0, 6).map((actor) => (
              <Grid item xs={6} sm={4} md={2} key={actor.id}>
                <Paper sx={{ p: 1 }}>
                  <Box
                    component="img"
                    src={`${imageBaseUrl}/w185${actor.profile_path}`}
                    alt={actor.name}
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 1,
                    }}
                  />
                  <Typography variant="subtitle2" align="center">
                    {actor.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    align="center"
                    display="block"
                    color="text.secondary"
                  >
                    {actor.character}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <List>
              <ListItem>
                <ListItemText primary="Status" secondary={movie.status} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Budget"
                  secondary={`$${movie.budget.toLocaleString()}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Revenue"
                  secondary={`$${movie.revenue.toLocaleString()}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Original Language"
                  secondary={movie.original_language.toUpperCase()}
                />
              </ListItem>
            </List>
          </Paper>

          {movie.videos.results.length > 0 && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Trailers & Videos
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                  title="Movie Trailer"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  allowFullScreen
                />
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default MovieDetails;

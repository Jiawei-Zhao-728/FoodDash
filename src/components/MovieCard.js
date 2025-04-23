import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
} from "@mui/material";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <CardActionArea onClick={handleClick} sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="300"
          image={
            movie.poster_path
              ? `${imageBaseUrl}${movie.poster_path}`
              : "/no-poster.png"
          }
          alt={movie.title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {new Date(movie.release_date).getFullYear()}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              value={movie.vote_average / 2}
              precision={0.5}
              readOnly
              size="small"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {movie.vote_average.toFixed(1)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;

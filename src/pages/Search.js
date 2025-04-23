import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Box,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Paper,
} from "@mui/material";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const query = useQuery();
  const navigate = useNavigate();
  const searchQuery = query.get("q") || "";
  const page = parseInt(query.get("page") || "1", 10);

  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortBy, setSortBy] = useState("popularity.desc");

  useEffect(() => {
    // Fetch genres
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/movies/genres"
        );
        setGenres(response.data.genres);
      } catch (err) {
        console.error("Failed to fetch genres:", err);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "http://localhost:5001/api/movies/search",
          {
            params: {
              query: searchQuery,
              page,
              with_genres: selectedGenre,
              sort_by: sortBy,
            },
          }
        );

        setMovies(response.data.results);
        setTotalPages(Math.min(response.data.total_pages, 500)); // TMDb API limits to 500 pages
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch movies");
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchMovies();
    } else {
      setMovies([]);
      setLoading(false);
    }
  }, [searchQuery, page, selectedGenre, sortBy]);

  const handlePageChange = (event, value) => {
    navigate(`/search?q=${searchQuery}&page=${value}`);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    navigate(`/search?q=${searchQuery}&page=1`);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    navigate(`/search?q=${searchQuery}&page=1`);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Search Results for "{searchQuery}"
        </Typography>

        <Paper sx={{ p: 2, mb: 3 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Genre</InputLabel>
                <Select
                  value={selectedGenre}
                  label="Genre"
                  onChange={handleGenreChange}
                >
                  <MenuItem value="">All Genres</MenuItem>
                  {genres.map((genre) => (
                    <MenuItem key={genre.id} value={genre.id}>
                      {genre.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={handleSortChange}
                >
                  <MenuItem value="popularity.desc">
                    Popularity Descending
                  </MenuItem>
                  <MenuItem value="popularity.asc">
                    Popularity Ascending
                  </MenuItem>
                  <MenuItem value="vote_average.desc">
                    Rating Descending
                  </MenuItem>
                  <MenuItem value="vote_average.asc">Rating Ascending</MenuItem>
                  <MenuItem value="release_date.desc">
                    Release Date Descending
                  </MenuItem>
                  <MenuItem value="release_date.asc">
                    Release Date Ascending
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        {error ? (
          <Typography color="error">{error}</Typography>
        ) : movies.length === 0 ? (
          <Typography>No movies found</Typography>
        ) : (
          <>
            <Grid container spacing={3}>
              {movies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                  <MovieCard movie={movie} />
                </Grid>
              ))}
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
                size="large"
              />
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
}

export default Search;

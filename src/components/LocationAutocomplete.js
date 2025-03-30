import React, { useState, useEffect } from "react";
import axios from "axios";
import { Autocomplete, TextField } from "@mui/material";

function LocationAutocomplete({ onSelectLocation }) {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Only call the API if the input has at least 3 characters
    if (inputValue.length < 3) {
      setOptions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          "https://api.foursquare.com/v3/autocomplete",
          {
            params: {
              query: inputValue,
              limit: 5, // Adjust as needed
              types: "place,geo", // Return suggestions for places and geos (cities, states, etc.)
            },
            headers: {
              Accept: "application/json",
              Authorization: process.env.REACT_APP_FSQ_API_KEY,
            },
          }
        );

        // Map the suggestions to a simple array of strings
        const suggestions = response.data.results
          .map((item) => item.text?.primary)
          .filter(Boolean);
        setOptions(suggestions);
      } catch (err) {
        console.error("Error fetching location suggestions:", err);
      }
    };

    fetchSuggestions();
  }, [inputValue]);

  return (
    <Autocomplete
      freeSolo
      options={options}
      inputValue={inputValue}
      onInputChange={(event, newValue) => setInputValue(newValue)}
      onChange={(event, value) => {
        // When user selects a suggestion, call the callback function (if provided)
        if (onSelectLocation) {
          onSelectLocation(value);
        }
      }}
      renderInput={(params) => (
        <TextField {...params} label="Search location..." variant="outlined" />
      )}
    />
  );
}

export default LocationAutocomplete;

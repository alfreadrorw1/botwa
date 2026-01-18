// lib/geocode.js
const axios = require("axios");

async function getLocation(query) {
  const url = "https://nominatim.openstreetmap.org/search";
  const res = await axios.get(url, {
    params: {
      q: query,
      format: "json",
      limit: 1
    },
    headers: {
      "User-Agent": "weather-bot"
    }
  });

  if (!res.data.length) return null;
  return {
    lat: res.data[0].lat,
    lon: res.data[0].lon,
    display: res.data[0].display_name
  };
}

module.exports = { getLocation };
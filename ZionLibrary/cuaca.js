const axios = require("axios");

const WINDY_API_KEY = "7tsPPceLJu2ELxwI0emcKd1gnk76Ouq1"
const ENDPOINT = "https://api.windy.com/api/point-forecast/v2";

/**
 * Ambil cuaca berdasarkan koordinat
 */
async function getCuaca(lat, lon) {
  const body = {
    lat,
    lon,
    model: "gfs",
    parameters: ["temp", "rh", "wind", "rain"],
    levels: ["surface"],
    key: WINDY_API_KEY
  };

  const res = await axios.post(ENDPOINT, body);
  return res.data;
}

module.exports = { getCuaca };
const axios = require("axios");

const getLocationName = async (lat, lng) => {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    const locationName = response.data.display_name;
    return locationName;
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving location name");
  }
};

module.exports = { getLocationName };

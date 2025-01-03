const express = require("express");
const fetch = require("node-fetch"); // Ensure you have node-fetch installed
const app = express();

app.get("/", async (req, res) => {
  try {
    const totalRequests = 210;
    const apiUrl = "https://api.plura.pro/v1/user/all?cursor=";

    // Create an array of fetch Promises
    const fetchPromises = Array.from({ length: totalRequests }, () => fetch(apiUrl));

    // Wait for all fetch requests to complete
    const responses = await Promise.all(fetchPromises);

    // Parse the responses
    const data = await Promise.all(responses.map((response) => response.json()));

    // Send the combined data as the response
    res.json(data);
  } catch (error) {
    console.error("Error while fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => console.log("Proxy running on http://localhost:3000"));
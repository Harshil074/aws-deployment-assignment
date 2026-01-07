const express = require("express");
const fetch = require("node-fetch");

const app = express();

// backend url (local / ec2 / ecs)
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

app.get("/", (req, res) => {
  res.send(`
    <h1>Express Frontend</h1>
    <p>Backend URL: ${BACKEND_URL}</p>
    <a href="/get-data">Fetch Backend Data</a>
  `);
});

app.get("/get-data", async (req, res) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/data`);
    const data = await response.json();
    res.send(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
  } catch (err) {
    res.send("Error connecting to backend");
  }
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});

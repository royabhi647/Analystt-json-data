const express = require("express");
const cors = require("cors");
const axios = require("axios");
const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

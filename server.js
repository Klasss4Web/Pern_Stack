const express = require("express");
const studentRoutes = require("./src/students/routes");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`Hello world from: ${req.url}`);
});

app.use(express.json());

app.use("/api/v1/students", studentRoutes);

app.listen(PORT, () => console.log(`App is listening on PORT: ${PORT}`));

const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const vulnerabilityRouter = require("./routes/vulnerability");
const passwordRoutes = require("./routes/password");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/vulnerability", vulnerabilityRouter);
app.use("/api/password", passwordRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

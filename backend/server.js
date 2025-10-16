const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const reportRoutes = require("./routes/reports");
const uploadRoutes = require("./routes/upload");

const app = express();
app.use(cors());
app.use(express.json());

// --- MongoDB Atlas connection ---
mongoose.connect(
  "mongodb+srv://<username>:<password>@cluster0.abcd.mongodb.net/ngoReports",
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/report", reportRoutes);
app.use("/reports/upload", uploadRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

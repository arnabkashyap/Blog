const express = require("express");
const cors = require("cors");
require("dotenv").config();

const prisma = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
}));
app.use(express.json());

// Basic API health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Blog Platform API is running!",
    timestamp: new Date().toISOString(),
  });
});

// Database connection check
app.get("/api/health/db", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      success: true,
      message: "Database connection successful!",
    });
  } catch (error) {
    console.error("Database health check failed:", error.message);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

// Handle unknown API routes
app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

const server = app.listen(PORT, () => {
  console.log(`Blog API running at http://localhost:${PORT}`);
});

// Gracefully disconnect Prisma on shutdown
async function shutdown() {
  await prisma.$disconnect();
  server.close(() => process.exit(0));
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

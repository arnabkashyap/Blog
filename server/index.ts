import express from "express";
import cors from "cors";
import "dotenv/config";

import prisma from "./db";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);
app.use(express.json());

// Basic API health check
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Blog Platform API is running!",
    timestamp: new Date().toISOString(),
  });
});

// Database connection check
app.get("/api/health/db", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      success: true,
      message: "Database connection successful!",
    });
  } catch (error) {
    console.error("Database health check failed:", error);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

// Fetch published posts
app.get("/api/posts", async (req, res) => {
  try {
    const search =
      typeof req.query.search === "string"
        ? req.query.search.trim()
        : "";

    const page = Math.max(
      1,
      Number.parseInt(String(req.query.page || "1"), 10) || 1
    );

    const limit = Math.min(
      50,
      Math.max(
        1,
        Number.parseInt(String(req.query.limit || "10"), 10) || 10
      )
    );

    const where = {
      published: true,
      ...(search
        ? {
            OR: [
              { title: { contains: search, mode: "insensitive" as const } },
              { excerpt: { contains: search, mode: "insensitive" as const } },
              { content: { contains: search, mode: "insensitive" as const } },
            ],
          }
        : {}),
    };

    const posts = await prisma.post.findMany({
      where,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error("Failed to fetch posts:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch posts",
    });
  }
});

// Handle unknown API routes
app.use("/api", (_req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

const server = app.listen(PORT, () => {
  console.log(`Blog API running at http://localhost:${PORT}`);
});

async function shutdown() {
  try {
    await prisma.$disconnect();
  } finally {
    server.close(() => process.exit(0));
  }
}

process.on("SIGINT", () => void shutdown());
process.on("SIGTERM", () => void shutdown());

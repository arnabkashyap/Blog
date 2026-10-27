import "dotenv/config";
import prisma from "./db";

async function main() {
  const author = await prisma.user.upsert({
    where: { email: "blog-test@example.com" },
    update: {},
    create: {
      name: "Blog Test Author",
      email: "blog-test@example.com",
    },
  });

  const post = await prisma.post.upsert({
    where: { slug: "welcome-to-our-blog" },
    update: {},
    create: {
      title: "Welcome to Our Blog",
      slug: "welcome-to-our-blog",
      excerpt: "Our blog is now connected to the database.",
      content: "This is our first test article. The frontend is fetching posts from the backend API connected to our PostgreSQL database.",
      published: true,
      authorId: author.id,
    },
  });

  console.log("Test post ready:", post.title);
}

main()
  .catch((error) => {
    console.error("Test post creation failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

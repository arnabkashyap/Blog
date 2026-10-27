export const APP_CONFIG = {
  name: 'GDG Campus Blog',
  tagline: 'Google Developer Groups on Campus - Tech & Engineering Insights',
  description: 'Explore articles, tutorials, and community spotlights written by campus developers and tech enthusiasts.',
};

export const BLOG_CATEGORIES = [
  'All',
  'Web Development',
  'Cloud & DevOps',
  'AI & Machine Learning',
  'Mobile & Flutter',
  'Campus Life',
];

export const INITIAL_FEATURED_POSTS = [
  {
    id: 'post-1',
    title: 'Building Scalable Full-Stack Applications with Vite and React 19',
    excerpt:
      'A deep dive into modular frontend architecture, React 19 features, and clean separation of concerns for campus projects.',
    category: 'Web Development',
    author: {
      name: 'GDG Tech Team',
      role: 'Web Dev Lead',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=GDGWeb',
    },
    publishedAt: '2026-10-24T10:00:00.000Z',
    readTime: '5 min read',
    tags: ['React', 'Architecture', 'Vite'],
  },
  {
    id: 'post-2',
    title: 'Getting Started with Google Cloud: Deploying Your First Microservice',
    excerpt:
      'Learn how to package, deploy, and scale microservices using Cloud Run with continuous deployment from GitHub.',
    category: 'Cloud & DevOps',
    author: {
      name: 'Cloud Study Jam',
      role: 'DevOps Lead',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=GDGCloud',
    },
    publishedAt: '2026-10-20T14:30:00.000Z',
    readTime: '7 min read',
    tags: ['GCP', 'Docker', 'Cloud Run'],
  },
  {
    id: 'post-3',
    title: 'Integrating Modern AI Tools into Developer Workflows',
    excerpt:
      'Practical ways student developers can harness modern agentic workflows and LLM APIs to build impactful open-source tools.',
    category: 'AI & Machine Learning',
    author: {
      name: 'AI Club Mentor',
      role: 'ML Facilitator',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=GDGAI',
    },
    publishedAt: '2026-10-18T09:15:00.000Z',
    readTime: '4 min read',
    tags: ['AI', 'Gemini', 'Productivity'],
  },
];

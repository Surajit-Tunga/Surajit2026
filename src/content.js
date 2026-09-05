export const name = "Alex Rivera";
export const role = "Full-Stack Developer & ML Enthusiast";
export const description =
  "I craft end-to-end digital experiences — from slick UIs to scalable backends and everything in between. Obsessed with clean code, open source, and the occasional algorithmic rabbit hole.";
export const profileImage =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format";
export const email = "alex.rivera@example.com";
export const whatsapp = "https://wa.me/919876543210";
export const location = "Kolkata, INDIA";
export const contactLinks = [
  {
    id: "mail",
    label: "Email",
    value: "alex.rivera@example.com",
    href: "mailto:alex.rivera@example.com",
    icon: "https://cdn.simpleicons.org/gmail/1A1A1A",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    icon: "https://cdn.simpleicons.org/whatsapp/1A1A1A",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/alexrivera",
    href: "https://linkedin.com/in/alexrivera",
    icon: "https://cdn.simpleicons.org/linkedin/1A1A1A",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/alexrivera",
    href: "https://github.com/alexrivera",
    icon: "https://cdn.simpleicons.org/github/1A1A1A",
  },
];
export const footerText =
  "Designed & built with ☕ by Alex Rivera · 2026 · All rights reserved.";
export const experienceFallback =
  "No professional experience yet — but I'm actively seeking opportunities! Reach out via the contact section below.";

export const socials = [
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/alexrivera",
    icon: "https://cdn.simpleicons.org/linkedin/1A1A1A",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/alexrivera",
    icon: "https://cdn.simpleicons.org/github/1A1A1A",
  },
  {
    id: "leetcode",
    label: "LeetCode",
    url: "https://leetcode.com/alexrivera",
    icon: "https://cdn.simpleicons.org/leetcode/1A1A1A",
  },
  {
    id: "scholar",
    label: "Google Scholar",
    url: "https://scholar.google.com/citations?user=alexrivera",
    icon: "https://cdn.simpleicons.org/googlescholar/1A1A1A",
  },
];

export const education = [
  {
    id: "masters",
    institute: "MIT — Massachusetts Institute of Technology",
    course: "M.S. in Computer Science",
    score: "GPA: 4.0 / 4.0",
    duration: "Sep 2024 – May 2026",
  },
  {
    id: "bachelors",
    institute: "IIT Delhi",
    course: "B.Tech. in Computer Science & Engineering",
    score: "CGPA: 9.4 / 10",
    duration: "Aug 2020 – May 2024",
  },
];

export const skills = [
  {
    domain: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/1A1A1A" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/1A1A1A" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/1A1A1A" },
      { name: "CSS / Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/1A1A1A" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/1A1A1A" },
    ],
  },
  {
    domain: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/1A1A1A" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/1A1A1A" },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/1A1A1A" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/1A1A1A" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/1A1A1A" },
    ],
  },
  {
    domain: "ML / AI",
    items: [
      { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/1A1A1A" },
      { name: "HuggingFace", icon: "https://cdn.simpleicons.org/huggingface/1A1A1A" },
      { name: "scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/1A1A1A" },
      { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1A1A1A" },
    ],
  },
  {
    domain: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/1A1A1A" },
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/1A1A1A" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/1A1A1A" },
      { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/1A1A1A" },
    ],
  },
];

export const experience = [
  {
    id: "stripe",
    company: "Stripe",
    role: "Software Engineering Intern",
    duration: "Jun 2025 – Aug 2025",
    mode: "Hybrid · San Francisco, CA",
    description:
      "Built a real-time fraud detection dashboard using React and WebSocket streaming. Reduced false positive rates by 18% by collaborating with the ML team to tune threshold models. Wrote a technical deep-dive that was published on the Stripe engineering blog.",
    blogLink: "https://stripe.com/blog/fraud-dashboard-internship",
  },
  {
    id: "research",
    company: "MIT CSAIL",
    role: "Graduate Research Assistant",
    duration: "Sep 2024 – Present",
    mode: "On-site · Cambridge, MA",
    description:
      "Researching efficient fine-tuning methods for large language models under Prof. Daniela Rus. Implemented LoRA adapters in PyTorch, achieving 94% of full fine-tune accuracy at 8% of the compute cost. Co-authoring a paper submitted to NeurIPS 2026.",
    blogLink: null,
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Full-Stack Developer",
    duration: "Jan 2023 – Aug 2024",
    mode: "Remote",
    description:
      "Delivered 12+ web applications for clients across e-commerce, edtech, and fintech verticals. Stack: Next.js, FastAPI, PostgreSQL, Stripe, and AWS. Maintained a 5-star rating on Upwork with an on-time delivery rate of 100%.",
    blogLink: null,
  },
];

export const projects = [
  {
    id: "llm-router",
    name: "LLM Router",
    techStack: ["Python", "FastAPI", "Redis", "LangChain"],
    description:
      "An intelligent query router that dispatches prompts to the cheapest model capable of answering them — GPT-4o, Claude 3, or Mistral — based on semantic difficulty scoring.",
    github: "https://github.com/alexrivera/llm-router",
    level: 4,
  },
  {
    id: "retro-kanban",
    name: "RetroBoard",
    techStack: ["React", "TypeScript", "Supabase", "Tailwind"],
    description:
      "A real-time Kanban board with a retro pixel-art theme. Supports drag-and-drop, multi-user collaboration, and offline-first sync via service workers.",
    github: "https://github.com/alexrivera/retroboard",
    level: 3,
  },
  {
    id: "code-review-ai",
    name: "CodeLens AI",
    techStack: ["Python", "OpenAI API", "GitHub Actions", "Flask"],
    description:
      "GitHub bot that posts AI-powered code-review comments on every pull request. Flags security issues, style violations, and performance anti-patterns.",
    github: "https://github.com/alexrivera/codelens-ai",
    level: 3,
  },
  {
    id: "ds-notebook",
    name: "DataFlow Studio",
    techStack: ["React", "D3.js", "Python", "Jupyter"],
    description:
      "A browser-based notebook interface that embeds live D3 visualizations alongside Python kernels. Built for data science teams who hate switching between tools.",
    github: "https://github.com/alexrivera/dataflow-studio",
    level: 2,
  },
  {
    id: "portfolio-gen",
    name: "PortfolioOS",
    techStack: ["React", "CSS", "Vite"],
    description:
      "A retro-OS-themed portfolio generator. Input your content JSON and get a fully styled website with window chrome, draggable cards, and boot animations.",
    github: "https://github.com/alexrivera/portfolio-os",
    level: 1,
  },
  {
    id: "weather-cli",
    name: "Skye CLI",
    techStack: ["Node.js", "Open-Meteo API"],
    description:
      "Terminal weather tool with ASCII art forecasts, hourly breakdowns, and a retro color scheme. Zero dependencies beyond the standard Node.js runtime.",
    github: "https://github.com/alexrivera/skye-cli",
    level: 0,
  },
];

export const achievements = [
  {
    id: "neurips",
    year: "2026",
    title: "NeurIPS 2026 — Paper Submission Accepted",
    description:
      "Co-authored 'LoRA-Lite: Efficient Fine-Tuning at 8% Compute' — accepted to NeurIPS 2026 main track.",
  },
  {
    id: "stripe-return",
    year: "2025",
    title: "Stripe Return Offer",
    description:
      "Received a full-time return offer from Stripe after the summer internship — accepted for post-graduation.",
  },
  {
    id: "hackathon",
    year: "2024",
    title: "HackMIT Grand Prize Winner",
    description:
      "Won the HackMIT 2024 grand prize ($10 000) for LLM Router, beating 400+ teams in a 36-hour sprint.",
  },
  {
    id: "open-source",
    year: "2023",
    title: "1 000+ GitHub Stars",
    description:
      "RetroBoard crossed 1 000 GitHub stars and was featured in the React weekly newsletter.",
  },
  {
    id: "cgpa",
    year: "2024",
    title: "IIT Delhi Department Rank 1",
    description:
      "Graduated first in the Computer Science department with a CGPA of 9.4 / 10.",
  },
  {
    id: "jee",
    year: "2020",
    title: "JEE Advanced AIR 47",
    description:
      "Secured All India Rank 47 in JEE Advanced 2020, qualifying for admission to IIT Delhi.",
  },
];

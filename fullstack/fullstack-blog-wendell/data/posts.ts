import { Post } from "@/models/Post";

export const posts: Post[] = [
  {
    id: "1",
    title: "OWASP Hardening for Next.js",
    category: "Security",
    excerpt:
      "Essential security practices for hardening your 2026 fullstack applications against common vulnerabilities.",
    content:
      "Security is not a feature, it's a foundation. In this guide, we explore how to implement Content Security Policies (CSP), sanitize user inputs, and protect against Cross-Site Scripting (XSS) in the Next.js App Router...",
    date: "2026-02-17",
  },
  {
    id: "2",
    title: "Mastering Tailwind v4: The CSS-First Approach",
    category: "Frontend",
    excerpt:
      "Exploring the new @theme block and how it simplifies global styling in modern web development.",
    content:
      "Tailwind CSS v4 introduces a paradigm shift by moving configuration directly into your CSS files. No more massive tailwind.config.js files; now we leverage standard CSS variables for a more native feel...",
    date: "2026-02-16",
  },
  {
    id: "3",
    title: "Scalable Architecture in Modern Fullstack Apps",
    category: "Architecture", // Generic replacement for proprietary projects
    excerpt:
      "The technical journey of developing a modular system dedicated to performance and maintainability.",
    content:
      "Building scalable systems requires a deep understanding of separation of concerns. By using a service-oriented layer and modular components, we can build applications that grow with the user base while remaining easy to debug...",
    date: "2026-02-15",
  },
  {
    id: "4",
    title: "Arduino & C++: Real-Time Monitoring",
    category: "Hardware",
    excerpt:
      "Integrating hardware sensors with web dashboards for automated data tracking systems.",
    content:
      "Coming from a systems background in C and Assembly, hardware integration is a powerful tool. This post covers the integration of ultrasonic sensors with a Node.js backend to monitor environmental changes in real-time...",
    date: "2026-02-14",
  },
  {
    id: "5",
    title: "Cross-Platform Safety: Mobile Geolocation",
    category: "Mobile", // Generic replacement for proprietary projects
    excerpt:
      "Challenges and solutions in developing safety-focused mobile applications using React Native.",
    content:
      "Developing high-stakes mobile applications requires a deep understanding of geolocation APIs and offline-first data management. Ensuring that users have access to critical info even without a signal is a vital technical challenge...",
    date: "2026-02-13",
  },
  {
    id: "6",
    title: "Information Security Principles: Final Review",
    category: "Security",
    excerpt:
      "A summary of key concepts for an Information Security final exam and professional practice.",
    content:
      "Maintaining a security-first mindset requires constant review of core principles. I've broken down encryption, network security, and risk assessment into this quick-reference guide for student and professional use...",
    date: "2026-02-12",
  },
];

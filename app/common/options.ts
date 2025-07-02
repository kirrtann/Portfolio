import { Github, LinkedinIcon, Mail } from "lucide-react";

export const tech = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Git",
];

export const projects = [
  {
    id: 1,
    title: "Shiv Manpower Services",
    description:
      "A comprehensive business website for a manpower services company featuring modern design, responsive layout, and professional presentation of services.",
    image: "/image.png",
    liveUrl: "https://shivmanpower.com/",
    githubUrl: "#",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    featured: true,
  },
  {
    id: 2,
    title: "Coffee Style E-commerce",
    description:
      "A modern e-commerce platform for coffee products with elegant design,  and smooth user experience.",
    image: "/image copy.png",
    liveUrl: "https://coffeestyle-ecommerce.vercel.app/",
    githubUrl: "#",
    technologies: ["Next.js", "Tailwind css", "JavaScript"],
    featured: true,
  },
  {
    id: 3,
    title: "Skype clone",
    description:
      "A real-time chat application inspired by Skype, featuring user authentication, account creation, and personal one-on-one messaging.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "",
    githubUrl: "#",
    technologies: [
      "Next.js",
      "JavaScript",
      "Nest.js",
      "Tailwndcss",
      "postGrey",
      "socet.io",
    ],
    featured: false,
  },
  {
    id: 4,
    title: "Art Gallery",
    description:
      "A web application for art enthusiasts, allowing buyers and sellers to browse, showcase, and purchase artworks. Features include user authentication, account creation, and a seamless platform for managing and discovering art pieces.",
    image: "/placeholder.svg?height=300&width=500",
    liveUrl: "#",
    githubUrl: "#",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Nest.js",
      "postGrey",
    ],
    featured: false,
  },
];

export const navOptions = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const social = [
  {
    icon: LinkedinIcon,
    href: "https://in.linkedin.com/in/kirtan-sonagra-2b9252239",
    color: "hover:text-blue-400",
  },
  {
    icon: Github,
    href: "https://github.com/kirrtann",
    color: "hover:text-gray-300",
  },
];

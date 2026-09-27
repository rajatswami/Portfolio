export const profile = {
  name: "Rajat Swami",
  initials: "RS",
  title: "Aspiring Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Backend Enthusiast",
  ],
  email: "rajatswami219@gmail.com",
  location: "Sirsa, Haryana, India",
  summary:
    "Aspiring Full Stack Developer with hands-on experience in building scalable web applications using Node.js, Express.js, React.js, Next.js, TypeScript, and MongoDB. Completed a 9-month software development internship where I worked on real-world projects, integrated third-party APIs, and contributed to production applications. Passionate about backend development, API integration, problem-solving, and continuously learning modern web technologies. Looking for an opportunity to contribute to a dynamic software development team while expanding my technical expertise.",
  tagline:
    "I build fast, scalable and reliable web applications from database to deployment.",
};

export const socials = {
  github: "https://github.com/rajatswami",
  linkedin: "#", // TODO: Add your LinkedIn profile
  email: `mailto:${profile.email}`,
};

export interface ISkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: ISkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API Development",
      "API Integration",
    ],
  },
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    category: "Tools & Technologies",
    skills: [
      "Git & GitHub",
      "Postman",
      "Postman API Documentation",
      "MongoDB Compass",
      "VS Code",
    ],
  },
  {
    category: "Additional Skills",
    skills: [
      "SEO (Search Engine Optimization)",
      "AEO (Answer Engine Optimization)",
      "Problem Solving",
      "Debugging",
      "API Testing",
    ],
  },
];

export const experience = {
  role: "Software Development Intern",
  company: "Repozitory Technologies Pvt. Ltd.",
  duration: "9 Months",
  bullets: [
    "Developed and maintained backend APIs using Node.js and Express.js",
    "Integrated third-party APIs into production applications",
    "Collaborated with developers on real-world software projects",
    "Worked with MongoDB for database design and management",
    "Tested APIs using Postman and created API documentation",
    "Fixed bugs and improved application performance",
    "Participated in code reviews and team discussions",
  ],
};

export interface IProject {
  title: string;
  duration?: string;
  role?: string;
  tech?: string[];
  bullets: string[];
}

export const projects: IProject[] = [
  {
    title: "Airline Booking Platform (FD Circle)",
    duration: "4 Months",
    tech: ["Node.js", "Express.js", "MongoDB", "TypeScript", "REST APIs"],
    bullets: [
      "Integrated external airline APIs",
      "Developed backend APIs for booking workflows",
      "Managed flight search and booking-related data",
      "Improved API response handling and debugging",
      "Worked closely with the development team on production features",
    ],
  },
  {
    title: "Photo Compressor Website",
    tech: ["React.js", "Node.js"],
    bullets: [
      "Upload and compress images",
      "Optimized image size while maintaining quality",
      "User-friendly interface",
      "Fast image processing",
    ],
  },
  {
    title: "WaahBooks Website",
    role: "SEO & AEO Optimization",
    tech: ["SEO", "AEO"],
    bullets: [
      "Improved website SEO performance",
      "Implemented Answer Engine Optimization (AEO) strategies",
      "Enhanced website visibility and search rankings",
    ],
  },
  {
    title: "3DX Labs Website",
    tech: ["Frontend", "Maintenance"],
    bullets: [
      "Assisted in website development and maintenance",
      "Worked on frontend improvements",
      "Supported feature implementation and debugging",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institute: "BRCM College of Engineering & Technology, Bahal, Bhiwani, Haryana",
    note: "2nd Year - In Progress",
  },
  {
    degree: "Diploma in Computer Science Engineering",
    institute: "Government Polytechnic, Sirsa",
    note: "Completed: 3-Year Diploma",
  },
  {
    degree: "Secondary School (10th)",
    institute: "HBSE (Haryana Board of School Education)",
    note: "",
  },
];

export const strengths = [
  "Quick Learner",
  "Strong Problem-Solving Skills",
  "Team Player",
  "Hardworking and Self-Motivated",
  "Good Communication Skills",
  "Adaptable to New Technologies",
];

export const hobbies = [
  "Learning New Technologies",
  "Building Web Applications",
  "Exploring Backend Development",
  "Reading Technical Articles",
  "Continuous Skill Development",
];

export const languages = ["English", "Hindi"];

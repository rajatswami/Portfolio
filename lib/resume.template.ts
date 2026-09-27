/**
 * Static résumé content rendered to HTML, then to PDF via Puppeteer in
 * resume.controller.ts. Kept in sync with the frontend's src/data/resume.ts.
 */
import { profileImageDataUri } from './profileImage';

const profile = {
  name: 'Rajat Swami',
  title: 'Aspiring Full Stack Developer',
  email: 'rajatswami219@gmail.com',
  github: 'https://github.com/rajatswami',
  githubLabel: 'github.com/rajatswami',
  location: 'Sirsa, Haryana, India',
  summary:
    'Aspiring Full Stack Developer with hands-on experience in building scalable web applications using Node.js, Express.js, React.js, Next.js, TypeScript, and MongoDB. Completed a 9-month software development internship where I worked on real-world projects, integrated third-party APIs, and contributed to production applications. Passionate about backend development, API integration, problem-solving, and continuously learning modern web technologies.',
};

const skillGroups = [
  { category: 'Programming Languages', skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
  { category: 'Frontend', skills: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'API Integration'] },
  { category: 'Database', skills: ['MongoDB', 'Mongoose'] },
  { category: 'Tools & Platforms', skills: ['Git & GitHub', 'Postman', 'MongoDB Compass', 'VS Code'] },
  { category: 'Additional Skills', skills: ['SEO', 'AEO', 'Problem Solving', 'Debugging'] },
];

const languages = ['English', 'Hindi'];

const experience = {
  role: 'Software Development Intern',
  company: 'Repozitory Technologies Pvt. Ltd.',
  duration: '9 Months',
  bullets: [
    'Developed and maintained backend APIs using Node.js and Express.js',
    'Integrated third-party APIs into production applications',
    'Collaborated with developers on real-world software projects',
    'Worked with MongoDB for database design and management',
    'Tested APIs using Postman and created comprehensive API documentation',
    'Fixed critical bugs and improved application performance',
  ],
};

const projects = [
  {
    title: 'Airline Booking Platform (FD Circle)',
    duration: '4 Months',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'REST APIs'],
    bullets: [
      'Integrated external airline APIs for live flight search and booking',
      'Developed robust backend workflows and optimized API response handling',
      'Managed flight and booking data with secure MongoDB schema design',
    ],
  },
  {
    title: 'Photo Compressor Website',
    tech: ['React.js', 'Node.js'],
    bullets: [
      'Built fast client-side and server image compression utility',
      'Optimized file size significantly while preserving visual quality',
    ],
  },
  {
    title: 'WaahBooks Website',
    tech: ['SEO', 'AEO'],
    bullets: [
      'Implemented Answer Engine Optimization (AEO) and SEO strategies',
      'Boosted website discoverability, search visibility, and organic rank',
    ],
  },
  {
    title: '3DX Labs Website',
    tech: ['Frontend', 'Maintenance'],
    bullets: [
      'Developed responsive UI components and performed ongoing maintenance',
      'Resolved frontend bugs and enhanced cross-device responsiveness',
    ],
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institute: 'BRCM College of Engineering & Technology, Bahal, Bhiwani, Haryana',
    note: '2nd Year - In Progress',
  },
  {
    degree: 'Diploma in Computer Science Engineering',
    institute: 'Government Polytechnic, Sirsa',
    note: 'Completed: 3-Year Diploma',
  },
  {
    degree: 'Secondary School (10th)',
    institute: 'HBSE (Haryana Board of School Education)',
    note: 'Completed',
  },
];

const strengths = [
  'Quick Learner & Self-Motivated',
  'Strong Problem-Solving Skills',
  'Team Collaboration & Git Workflow',
  'Adaptable to Modern Tech Stacks',
];

const escapeHtml = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const bullets = (items: string[]): string =>
  `<ul class="bullets">${items
    .map((item) => `<li><span class="dot"></span><span>${escapeHtml(item)}</span></li>`)
    .join('')}</ul>`;

const pills = (items: string[], variant: 'sidebar' | 'tech'): string =>
  `<div class="pills pills-${variant}">${items
    .map((item) => `<span class="pill">${escapeHtml(item)}</span>`)
    .join('')}</div>`;

const ICON_MAIL =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>';
const ICON_PIN =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>';
const ICON_GITHUB =
  '<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>';
const ICON_CHECK =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.75l6 6 9-13.5"/></svg>';

export const getResumeHtml = (): string => `
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${profile.name} - Résumé</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; }
  :root {
    --gold: #f5b544;
    --gold-dark: #d97706;
    --gold-light: #fef3c7;
    --gold-soft: #fcd34d;
    --navy-bg: #070b14;
    --navy-card: #0e1626;
    --navy-border: rgba(245, 181, 68, 0.2);
    --slate-900: #0f172a;
    --slate-800: #1e293b;
    --slate-700: #334155;
    --slate-600: #475569;
    --slate-400: #94a3b8;
    --slate-300: #cbd5e1;
    --slate-100: #f1f5f9;
  }
  body {
    margin: 0;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    color: var(--slate-800);
    background: #ffffff;
    display: flex;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3 {
    font-family: 'Poppins', 'Inter', sans-serif;
    margin: 0;
  }

  aside {
    width: 33.5%;
    background: var(--navy-bg);
    background-image:
      radial-gradient(circle at 10% 0%, rgba(245, 181, 68, 0.18), transparent 45%),
      radial-gradient(circle at 90% 90%, rgba(6, 182, 212, 0.12), transparent 40%);
    color: var(--slate-300);
    padding: 30px 22px;
    border-right: 1px solid rgba(255, 255, 255, 0.08);
  }

  .avatar-wrap {
    text-align: center;
    margin-bottom: 14px;
  }
  .avatar {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, var(--gold), #06b6d4);
    box-shadow: 0 0 24px rgba(245, 181, 68, 0.35);
    margin: 0 auto;
  }
  .avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    display: block;
  }

  .sidebar-header {
    text-align: center;
    margin-bottom: 18px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  aside h1 {
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }
  aside .role {
    color: var(--gold-soft);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  aside h2 {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--gold);
    margin: 16px 0 8px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  aside h2::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(245, 181, 68, 0.25);
  }

  .contact-list {
    margin-bottom: 12px;
  }
  .contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 10.5px;
    color: var(--slate-300);
    margin-bottom: 6px;
    text-decoration: none;
  }
  .contact-item svg {
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    color: var(--gold);
  }
  .contact-item span {
    word-break: break-all;
  }

  .skill-group {
    margin-bottom: 10px;
  }
  .skill-group .label {
    font-size: 10.5px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 4px;
  }

  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .pill {
    font-size: 9.5px;
    line-height: 1.4;
    border-radius: 6px;
    padding: 2px 7px;
    white-space: nowrap;
    font-weight: 500;
  }
  .pills-sidebar .pill {
    background: rgba(255, 255, 255, 0.05);
    color: #e2e8f0;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
  .pills-tech .pill {
    background: var(--gold-light);
    color: #92400e;
    border: 1px solid #fde68a;
    font-weight: 600;
    font-size: 9px;
  }

  .strength-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .strength-list li {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    font-size: 10.5px;
    color: var(--slate-300);
    margin-bottom: 5px;
    line-height: 1.35;
  }
  .strength-list svg {
    width: 12px;
    height: 12px;
    margin-top: 1px;
    flex-shrink: 0;
    color: #34d399;
  }

  main {
    width: 66.5%;
    padding: 30px 28px;
    background: #ffffff;
  }

  section {
    margin-bottom: 18px;
  }
  section:last-child {
    margin-bottom: 0;
  }

  section h2 {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--slate-900);
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 10px;
    position: relative;
    padding-left: 10px;
  }
  section h2::before {
    content: '';
    position: absolute;
    left: 0;
    top: 2px;
    bottom: 2px;
    width: 3px;
    border-radius: 2px;
    background: linear-gradient(180deg, var(--gold), var(--gold-dark));
  }
  section h2::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #e2e8f0, transparent);
  }

  .summary-text {
    font-size: 11px;
    line-height: 1.6;
    color: var(--slate-700);
    margin: 0;
    background: #f8fafc;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    border-left: 3px solid var(--gold);
  }

  .entry {
    margin-bottom: 13px;
    page-break-inside: avoid;
  }
  .entry:last-child {
    margin-bottom: 0;
  }

  .entry-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 3px;
  }
  .entry-title {
    font-size: 12px;
    font-weight: 700;
    color: var(--slate-900);
  }
  .entry-company {
    font-size: 11px;
    font-weight: 600;
    color: #0284c7;
  }
  .duration-badge {
    font-size: 9.5px;
    font-weight: 600;
    color: #92400e;
    background: #fef3c7;
    border: 1px solid #fde68a;
    border-radius: 999px;
    padding: 1.5px 8px;
    white-space: nowrap;
  }

  .institute {
    font-size: 10.5px;
    color: var(--slate-600);
    margin: 1px 0 0;
  }

  ul.bullets {
    list-style: none;
    margin: 5px 0 0;
    padding: 0;
  }
  ul.bullets li {
    display: flex;
    align-items: flex-start;
    gap: 7px;
    font-size: 10.5px;
    line-height: 1.45;
    color: var(--slate-700);
    margin-bottom: 3px;
  }
  ul.bullets .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--gold);
    margin-top: 6px;
    flex-shrink: 0;
  }
</style>
</head>
<body>
  <aside>
    <div class="avatar-wrap">
      <div class="avatar">
        <img src="${profileImageDataUri}" alt="${escapeHtml(profile.name)}" />
      </div>
    </div>

    <div class="sidebar-header">
      <h1>${escapeHtml(profile.name)}</h1>
      <div class="role">${escapeHtml(profile.title)}</div>
    </div>

    <h2>Contact</h2>
    <div class="contact-list">
      <div class="contact-item">
        ${ICON_MAIL}
        <span>${escapeHtml(profile.email)}</span>
      </div>
      <div class="contact-item">
        ${ICON_GITHUB}
        <span>${escapeHtml(profile.githubLabel)}</span>
      </div>
      <div class="contact-item">
        ${ICON_PIN}
        <span>${escapeHtml(profile.location)}</span>
      </div>
    </div>

    <h2>Skills</h2>
    ${skillGroups
      .map(
        (group) => `
      <div class="skill-group">
        <div class="label">${escapeHtml(group.category)}</div>
        ${pills(group.skills, 'sidebar')}
      </div>`
      )
      .join('')}

    <h2>Languages</h2>
    ${pills(languages, 'sidebar')}

    <h2>Strengths</h2>
    <ul class="strength-list">
      ${strengths.map((s) => `<li>${ICON_CHECK}<span>${escapeHtml(s)}</span></li>`).join('')}
    </ul>
  </aside>

  <main>
    <section>
      <h2>Professional Summary</h2>
      <p class="summary-text">${escapeHtml(profile.summary)}</p>
    </section>

    <section>
      <h2>Work Experience</h2>
      <div class="entry">
        <div class="entry-header">
          <div>
            <span class="entry-title">${escapeHtml(experience.role)}</span>
            <span class="entry-company"> • ${escapeHtml(experience.company)}</span>
          </div>
          <span class="duration-badge">${escapeHtml(experience.duration)}</span>
        </div>
        ${bullets(experience.bullets)}
      </div>
    </section>

    <section>
      <h2>Featured Projects</h2>
      ${projects
        .map(
          (project) => `
        <div class="entry">
          <div class="entry-header">
            <span class="entry-title">${escapeHtml(project.title)}</span>
            ${project.duration ? `<span class="duration-badge">${escapeHtml(project.duration)}</span>` : ''}
          </div>
          ${pills(project.tech, 'tech')}
          ${bullets(project.bullets)}
        </div>`
        )
        .join('')}
    </section>

    <section>
      <h2>Education</h2>
      ${education
        .map(
          (edu) => `
        <div class="entry">
          <div class="entry-header">
            <span class="entry-title">${escapeHtml(edu.degree)}</span>
            ${edu.note ? `<span class="duration-badge">${escapeHtml(edu.note)}</span>` : ''}
          </div>
          <p class="institute">${escapeHtml(edu.institute)}</p>
        </div>`
        )
        .join('')}
    </section>
  </main>
</body>
</html>
`;


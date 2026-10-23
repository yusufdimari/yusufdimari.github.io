import type { CSSProperties } from "react";

const aboutParagraphs = [
  <>
    I am a <b>full-stack software engineer</b> specialising in production{" "}
    <b>web</b> and <b>mobile</b> applications, backend systems, and{" "}
    <b>applied AI</b>. I build cross-platform products with{" "}
    <b>React Native</b>, <b>TypeScript</b>, <b>Python</b>, REST APIs,
    databases, and cloud infrastructure.
  </>,
  <>
    I hold an MSc in <b>Artificial Intelligence</b> with Distinction from
    London South Bank University and a First-Class BSc in{" "}
    <b>Software Engineering</b>. I combine hands-on engineering with system
    design, production observability, automated testing, and multimodal AI
    integration.
  </>,
  <>
    I have a proven track record of delivering scalable, high-performance
    solutions, designing APIs, and shipping user-facing products. I thrive in
    collaborative environments and enjoy mentoring junior developers. I am
    dedicated to continuous learning and improvement in my field.
  </>,
  <>
    In my spare time, I enjoy playing football, practicing photography, and
    learning new languages, all of which contribute to my creativity,
    discipline, and adaptability.
  </>,
];

export function AboutMe() {
  return (
    <section className="xl:h-[600px] xl:overflow-y-auto flex flex-col">
      <p className="font-bold text-2xl mb-5">About Me</p>
      <div className="about-text">
        {aboutParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className="stagger-item"
            style={{ "--stagger": index } as CSSProperties}
          >
            {paragraph}
          </p>
        ))}
      </div>
      <Skills />
    </section>
  );
}

const skills = [
  {
    name: "css3",
    href: "https://www.w3schools.com/css/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "express",
    href: "https://expressjs.com",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },
  {
    name: "firebase",
    href: "https://firebase.google.com/",
    src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    name: "git",
    href: "https://git-scm.com/",
    src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    name: "html5",
    href: "https://www.w3.org/html/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "mongodb",
    href: "https://www.mongodb.com/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "nextjs",
    href: "https://nextjs.org/",
    src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  },
  {
    name: "nodejs",
    href: "https://nodejs.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "postgresql",
    href: "https://www.postgresql.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  },
  {
    name: "supabase",
    href: "https://supabase.com",
    src: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
  },
  {
    name: "docker",
    href: "https://www.docker.com/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  },
  {
    name: "fastapi",
    href: "https://fastapi.tiangolo.com/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "postman",
    href: "https://postman.com",
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "python",
    href: "https://www.python.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "react",
    href: "https://reactjs.org/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "reactnative",
    href: "https://reactnative.dev/",
    src: "https://reactnative.dev/img/header_logo.svg",
  },
  {
    name: "redux",
    href: "https://redux.js.org",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    name: "tailwind",
    href: "https://tailwindcss.com/",
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "typescript",
    href: "https://www.typescriptlang.org/",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
];

const Skills = () => {
  return (
    <section className="mt-8 pb-4">
      <div className="flex gap-8 flex-wrap justify-center">
        {skills.map((skill, index) => (
          <a
            key={skill.name}
            href={skill.href}
            target="_blank"
            rel="noreferrer"
            className="skill-icon"
            style={{ "--stagger": index } as CSSProperties}
          >
            <img
              className="Skilled skill-badge"
              src={skill.src}
              alt={skill.name}
              width="40"
              height="40"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

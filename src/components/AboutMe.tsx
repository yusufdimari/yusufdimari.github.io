export function AboutMe() {
  return (
    <section className="xl:h-[600px] flex flex-col justify-center">
      <p className="font-bold text-2xl mb-5">About Me</p>
      <div className="about-text">
        <p>
          <p>
            I am a skilled <b>software engineer</b> specializing in{" "}
            <b>full-stack development</b> with the<b> MERN</b> stack (MongoDB,
            Express, React, Node.js) and <b>mobile</b> development using{" "}
            <b>React Native</b>.
          </p>
          <p>
            With a First-Class degree in <b>Software Engineering</b> and
            currently pursuing a Master’s in <b>Artificial Intelligence</b>, I
            am experienced in developing <b>user-centric</b> applications for
            both web and <b>mobile</b> platforms. My background includes
            building <b>decentralized</b> applications(dApps) with{" "}
            <b>blockchain</b> integration, working with <b>Web3</b> technologies
            , and creating <b>NFTs</b> on the <b>NEAR</b> protocol.
          </p>
          <p>
            I have a proven track record of delivering <b>scalable</b>,
            high-performance solutions, optimizing user interfaces, and managing
            seamless <b>API</b> integrations. Known for my
            <b> problem-solving</b>
            abilities and commitment to code quality, I thrive in
            <b> collaborative</b> environments and enjoy <b>mentoring</b> junior
            developers. I am passionate about leveraging <b>innovative </b>
            technologies to drive impactful digital solutions, and I am
            dedicated to continuous <b>learning</b> and improvement in my field.
          </p>
          <p>
            In my spare time, I enjoy playing football, practicing photography,
            and learning new languages, all of which contribute to my
            creativity, discipline, and adaptability.
          </p>
        </p>
      </div>
      <Skills />
    </section>
  );
}

const Skills = () => {
  return (
    <section className="xl:absolute bottom-5">
      <div className="flex gap-10 flex-wrap justify-center ">
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            className="Skilled"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://expressjs.com" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="Skilled"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
            alt="express"
            width="40"
            height="40"
          />{" "}
        </a>

        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="Skilled"
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="firebase"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="Skilled"
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            width="40"
            height="40"
          />{" "}
        </a>

        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="Skilled"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="Skilled"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="mongodb"
            width="40"
            height="40"
          />{" "}
        </a>

        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="Skilled"
            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
            alt="nextjs"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="Skilled"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="Skilled"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
            alt="postgresql"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://postman.com" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="Skilled"
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            alt="postman"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://www.python.org" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="Skilled"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="python"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="Skilled"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="Skilled"
            src="https://reactnative.dev/img/header_logo.svg"
            alt="reactnative"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://redux.js.org" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="Skilled"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          {" "}
          <img
            className="Skilled"
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="tailwind"
            width="40"
            height="40"
          />{" "}
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            className="Skilled"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="typescript"
            width="40"
            height="40"
          />{" "}
        </a>
      </div>
    </section>
  );
};

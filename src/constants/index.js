import {
        mobile,
        backend,
        creator,
        web,
        javascript,
        typescript,
        html,
        css,
        reactjs,
        redux,
        tailwind,
        nodejs,
        mongodb,
        git,
        school,
        acharya,
        daacademy,
        youtube,
        prompt,
        today,
        threejs,
      } from "../assets";
      
      export const navLinks = [
        {
          id: "about",
          title: "About",
        },
        {
          id: "work",
          title: "Work",
        },
        {
          id: "contact",
          title: "Contact",
        },
      ];
      
      const services = [
        {
          title: "Web Developer",
          icon: web,
        },
        {
          title: "Front-End Developer",
          icon: mobile,
        },
        {
          title: "Web Application Developer",
          icon: backend,
        },
        {
          title: "React Developer",
          icon: creator,
        },
      ];
      
      const technologies = [
        {
          name: "HTML 5",
          icon: html,
        },
        {
          name: "CSS 3",
          icon: css,
        },
        {
          name: "JavaScript",
          icon: javascript,
        },
        {
          name: "TypeScript",
          icon: typescript,
        },
        {
          name: "React JS",
          icon: reactjs,
        },
        {
          name: "Redux Toolkit",
          icon: redux,
        },
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
        {
          name: "Node JS",
          icon: nodejs,
        },
        {
          name: "MongoDB",
          icon: mongodb,
        },
        {
          name: "Three JS",
          icon: threejs,
        },
        {
          name: "git",
          icon: git,
        },
      ];
      
      const experiences = [
        {
          title: "Schooling",
          company_name: "Sri Jnavardhaka School",
          icon: school,
          iconBg: "#383E56",
          date: "March 2009 - April 2019",
          points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
          ],
        },
        {
          title: "Diploma In Computer Science And Engineering",
          company_name: "Acharya Polytechnic",
          icon: acharya,
          iconBg: "#E6DEDD",
          date: "Jan 2019 - Feb 2022",
          points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
          ],
        },
        {
          title: "Web Developer",
          company_name: "Web Dev",
          icon: daacademy,
          iconBg: "#383E56",
          date: "Jan 2022 - Jan 2023",
          points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
          ],
        },
        {
          title: "Youtube",
          company_name: "Youtube",
          icon: youtube,
          iconBg: "#E6DEDD",
          date: "Jan 2023 - Present",
          points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
          ],
        },
      ];
      const projects = [
        {
          name: "Prompt Pedia",
          description:
            "PromptPedia is an AI prompting tool for modern world to discover, create and share creative prompts.",
          tags: [
            {
              name: "react",
              color: "blue-text-gradient",
            },
            {
              name: "mongodb",
              color: "green-text-gradient",
            },
            {
              name: "tailwind",
              color: "pink-text-gradient",
            },
          ],
          image: prompt,
          source_code_link: "https://github.com/",
        },
        {
          name: "Today",
          description:
            "Today is a weather application, where you can view current weather along with the date and time, also you an see the weather condition of all other cities.",
          tags: [
            {
              name: "react",
              color: "blue-text-gradient",
            },
            {
              name: "restapi",
              color: "green-text-gradient",
            },
            {
              name: "scss",
              color: "pink-text-gradient",
            },
          ],
          image: today,
          source_code_link: "https://github.com/",
        },
      ];
      
      export { services, technologies, experiences, projects };
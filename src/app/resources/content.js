import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Hardi",
  lastName: "Anto",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpeg",
  location: "Asia/Makassar", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa Indonesia", "Jawa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hardianto01",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://id.linkedin.com/in/hardianto01",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:hardiantojek92@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer and Cloud Computing Enthusiast</>,
  subline: (
    <>
      I'm Hardianto, a Cloud Computing Enthusiast. Student at{" "}
      <InlineCode>University of Dipa Makassar</InlineCode>, where I craft creative idea, inovative
      Solution, dedicated student
      <br /> . After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a dedicated student at Universitas Dipa Makassar with a strong foundation in IT,
        beginning my journey in high school with a focus on chatbot development to execute specific
        and technical commands. This early passion evolved into a career path in software
        engineering, where I gained a deep understanding of the complexities involved in creating
        innovative products and applications through collaborative and iterative processes.
        Currently, I am honing my expertise in application development, with a particular interest
        in cloud computing, which has further fueled my enthusiasm for leveraging advanced
        technologies to drive impactful solutions. I am committed to continuous growth and embracing
        new challenges in the dynamic IT landscape.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Journey",
    experiences: [
      {
        company: "Embarking on My Career Journey",
        timeframe: "December 2020",
        role: "Student",
        achievements: [
          <>
            I began my journey into the realm of software development, immersing myself in the
            intricacies of the Node.js ecosystem.
          </>,
        ],
        images: [],
      },
      {
        company: "Pioneering WhatsApp Bot Development",
        timeframe: "January 2021",
        role: "Student",
        achievements: [
          <>
            Delving into the world of automated communication, I independently developed
            cutting-edge WhatsApp bots utilizing powerful libraries such as{" "}
            <InlineCode>Baileys</InlineCode> and <InlineCode>Open-Wa</InlineCode>.
          </>,
        ],
        images: [],
      },
      {
        company: "Mastering the Art of RESTful APIs",
        timeframe: "June 2021",
        role: "Freelance",
        achievements: [
          <>
            I delved deep into the intricacies of RESTful API development, meticulously crafting
            robust APIs using the Express.js framework, implementing CRUD operations, and ensuring
            stringent security measures.
          </>,
        ],
        images: [],
      },
      {
        company: "Exploring the Depths of C++",
        timeframe: "November 2022",
        role: "Student",
        achievements: [
          <>
            I embarked on a journey into the world of C++, honing my skills in fundamental concepts
            and algorithmic problem-solving.
          </>,
        ],
        images: [],
      },
      {
        company: "Harnessing the Power of Python Data Structures",
        role: "Student",
        timeframe: "February 2023",
        achievements: [
          <>
            I delved into Python, mastering its data manipulation capabilities, crafting APIs with
            FastAPI, exploring the realms of machine learning and data science, and harnessing the
            power of Sage Maker for advanced analytics.
          </>,
        ],
        images: [],
      },
      {
        company: "Exploring the Efficiency of Golang",
        timeframe: "July 2023",
        role: "Student",
        achievements: [
          <>
            Recognizing the need for efficiency and speed, I ventured into Golang, leveraging its
            capabilities to optimize WhatsApp bot performance.
          </>,
        ],
        images: [],
      },
      {
        company: "Delving into Java's Versatility",
        timeframe: "November 2023",
        role: "Student",
        achievements: [
          <>
            I delved into Java, mastering its concepts and developing basic UI programs using
            NetBeans IDE.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Dipa Makassar",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Bangkit 2024 Batch 2",
        description: <>Cohort at Bangkit 2024 batch 2. Cloud Computing learning path</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Cloud Computing Engineer",
        description: (
          <>
            Make architecture system for cloud, secured, Building realbilty, auto scaling, and
            stable system in Google cloud console
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Laravel",
        description: <>Building next gen apps with Laravel</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },

      {
        title: "Bot Discord, Whatsapp & Telegram",
        description: (
          <>
            Building Framework Bot, to handle communication and specific commands with serveral
            languange like <InlineCode>javascript/typescript</InlineCode>,{" "}
            <InlineCode>golang</InlineCode> and <InlineCode>python.</InlineCode>
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "DevOps",
        description: (
          <>
            developed website, application with self hosting (like on premise) or without any
            hosting
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

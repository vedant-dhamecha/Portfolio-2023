import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig,
    SiMongodb,
    SiExpress,
    SiNodedotjs,
    SiAntdesign,
    SiStrapi,
    SiStripe,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPhp,
    SiMysql,
    SiPython
} from "react-icons/si";
import  {FaJava} from "react-icons/fa";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github?: string;
  demo?: string;
  image: string;
  gitavailable: boolean;
  linkavailable: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Portfolio 2023",
        description:
            "This is the first iteration of my portfolio.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/vedant-dhamecha/Portfolio-2023",
        demo: "https://portfolio-2023-silk-rho.vercel.app/",
        image: "/projects/portfolio.png",
        gitavailable: true,
        linkavailable:true,
    },
    {
        id: 1,
        name: "Happy Tails",
        description:
            "An online platform for managing a private pet shelter.",
        technologies: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
        techNames: ["MongoDB", "Express.js", "React", "Node.js"],
        techLinks: ["https://www.mongodb.com/", "https://expressjs.com/", "https://react.dev/","https://nodejs.org/en/about"],
        github: "https://github.com/vedant-dhamecha/happy-tails",
        demo: "https://happytails-six.vercel.app/",
        image: "/projects/happytails.png",
        gitavailable: true,
        linkavailable:true,
    },
    {
        id: 2,
        name: "Time & Work Tracking Software",
        description:"Efficiently Monitor Employee Productivity and Project Progress, Enhancing Workflow Management.",
        technologies: [SiMongodb, SiExpress, SiReact, SiNodedotjs, SiAntdesign],
        techNames: ["MongoDB", "Express.js", "React", "Node.js", "AntDesign"],
        techLinks: ["https://www.mongodb.com/", "https://expressjs.com/", "https://react.dev/","https://nodejs.org/en/about","https://ant.design/"],
        github: "https://github.com/vedant-dhamecha/Time-Work-Tracking-System",
        image: "/projects/tracking.png",
        gitavailable: true,
        linkavailable:false,
    },
    {
        id: 3,
        name: "Tech Shop",
        description:"An Ecommerce Website for Tech Products with Stripe Payment Method.",
        technologies: [SiReact,SiStrapi,SiStripe],
        techNames: ["React","Strapi","Stripe"],
        techLinks: ["https://react.dev/","https://strapi.io/","https://stripe.com/in"],
        github: "https://github.com/vedant-dhamecha/Tech-Shop",
        image: "/projects/techshop.png",
        gitavailable: true,
        linkavailable:false,
    },
    {
        id: 4,
        name: "Doctor Appointment System",
        description:"Portal to Immediately Book Appointment to Doctor with Available Schedule.",
        technologies: [SiHtml5,SiCss3,SiJavascript,SiPhp,SiMysql],
        techNames: ["HTML5", "CSS3", "Javascript", "PHP", "Mysql"],
        techLinks: ["https://dev.w3.org/html5/spec-LC/","https://www.css3.com/","https://www.javascript.com/","https://www.php.net/","https://www.mysql.com/"],
        github: "https://github.com/vedant-dhamecha/doctors_appointment_system",
        demo: "https://github.com/nuIIpointerexception/",
        image: "/projects/doc.png",
        gitavailable: true,
        linkavailable:true,
    },
    {
        id: 5,
        name: "Typing Speed Testing GUI",
        description:"A Tkinter-based GUI for Testing Typing Speed with measure of Words Per Minute (WPM), Accuracy, and Errors.",
        technologies: [SiPython],
        techNames: ["Python"],
        techLinks: ["https://www.python.org/"],
        github: "https://github.com/vedant-dhamecha/Typing-Speed-Test--PYTHON-GUI-",
        image: "/projects/pygui.png",
        gitavailable: true,
        linkavailable:false,
    },
    {
        id: 6,
        name: "Voting System",
        description:"Advanced Online Voting system, Ensures Secure & Efficient Electronic Voting Processes.",
        technologies: [FaJava, SiMysql],
        techNames: ["Java", "Mysql"],
        techLinks: ["https://dev.java/", "https://www.mysql.com/"],
        github: "https://github.com/vedant-dhamecha/vote-system",
        image: "/projects/votesy.png",
        gitavailable: true,
        linkavailable:false,
    },
];
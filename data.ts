import { RiComputerLine } from "react-icons/ri";
import { FaServer,FaDiscord } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: FaDiscord,
    title: "Discord Bot Design",
    about:
      "Discord bot development using Node, Js on Replit, Hiroku and Glitch. i Deploy bot such as Music bot , Dm mass Bot, Support bot and managment bot.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "35",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "50",
  },
 
  {
    Icon: BsCircleFill,
    name: "React",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    name: "Resume Builder",
    description:
      "This app to Build your own resumme using various templets",
    image_path: "/images/Resume.png",
    deployed_url: "https://resume-builder-coral.vercel.app/",
    github_url: "https://github.com/Anu374/Resume-builder.git",
    category: ["react"],
    key_techs: ["React", "Next.js", "Material UI"],
  },
  {
    name: "Amazon Prime",
    description: "This app is clone of Amazon prime front page.",
    image_path: "/image/Resume.png",
    deployed_url: "https://amazon-prime-page.vercel.app/",
    github_url: "https://github.com/Anu374/Amazon-Prime-page.git",
    category: ["HTML/CSS"],
    key_techs: ["HTML", "CSS"],
  },
 ];

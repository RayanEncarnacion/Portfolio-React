import CV from "../../assets/RayanEncarnaciónResume.pdf";

const navigationLinks = [
  {
    text: "About Me",
    href: "#about",
    id: Math.random(),
  },
  {
    text: "Projects",
    href: "#projects",
    id: Math.random(),
  },
  {
    text: "Download CV",
    href: CV,
    fileName: "Rayan Encarnación",
    id: Math.random(),
  },
  {
    text: "Hire Me",
    href: "#contact",
    id: Math.random(),
  },
];

export default navigationLinks;

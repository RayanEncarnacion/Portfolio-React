import MSimg from "../../../assets/images/move-scheduler-lg-1.png";
import SIimg from "../../../assets/images/solveit-st-lg-1.png";
import Bimg from "../../../assets/images/biblion-lg-1.png";
import PGimg from "../../../assets/images/pig-game-lg-1.png";
import DHimg from "../../../assets/images/dreamed-lg-1.png";
import TDimg from "../../../assets/images/todo-lg-1.png";
import FDimg from "../../../assets/images/fooders-lg-1.png";
import Vimg from "../../../assets/images/validation-lg-1.png";
import HTML from "../../../assets/SkillsLogos/html-5-logo-svgrepo-com.svg";
import CSS from "../../../assets/SkillsLogos/css-3-logo-svgrepo-com.svg";
import Bootstrap from "../../../assets/SkillsLogos/bootstrap-4-logo-svgrepo-com.svg";
import GSAP from "../../../assets/SkillsLogos/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png";
import SASS from "../../../assets/SkillsLogos/sass-1.svg";
import JavaScript from "../../../assets/SkillsLogos/javascript-js-seeklogo.com.svg";
import NodeJs from "../../../assets/SkillsLogos/nodejs-icon-logo-svgrepo-com.svg";
import EJS from "../../../assets/SkillsLogos/Ejs-icon.svg";
import MongoDB from "../../../assets/SkillsLogos/mongodb-icon.svg";
import Mongoose from "../../../assets/SkillsLogos/mongoose-logo.png";
import Tailwind from "../../../assets/SkillsLogos/tailwind-svgrepo-com.svg";
import React from "../../../assets/SkillsLogos/react-logo-svgrepo-com.svg";
import StyledComponents from "../../../assets/SkillsLogos/styled-svgrepo-com.svg";
import Leaflet from "../../../assets/SkillsLogos/leaflet-1-logo-svg-vector.svg";

export const projectsDetails = [
  {
    title: "Move Scheduler",
    img: MSimg,
    description:
      "This is an exercise app in which the user can schedule exercises and mark the location on the map showing a tooltip with the exercise details. In this project I used two React libraries: Leaflet (Map) and Styled components (Styles).",
    tech: [React, StyledComponents, Leaflet],
    buttons: 2,
    live: "https://movescheduler.netlify.app/",
    repository: "https://github.com/RayanEncarnacion/move-scheduler",
  },
  {
    title: "Solve It",
    img: SIimg,
    description:
      "Solve It is an application created to solve the problems in a company working with the Bug Tracking system. The Engineers need to create tickets for every problem/bug and the Developers must solve them.",
    tech: [HTML, Tailwind, JavaScript],
    buttons: 2,
    live: "https://solveit-project.netlify.app/",
    repository: "https://github.com/RayanEncarnacion/Solve-It",
  },
  {
    title: "Solve It (API)",
    img: "",
    description:
      "This is an API created to manage a data base for my Solve It application. In this project I dived into Back End using NodeJs to manage the information received from the user and then create, read, update and delete (CRUD) that information on the data base.",
    tech: [NodeJs, EJS, MongoDB, Mongoose],
    buttons: 1,
    live: "",
    repository: "https://github.com/RayanEncarnacion/Solve-It-API",
  },
  {
    title: "Biblion",
    img: Bimg,
    description:
      "This is a modern landing page (Front End only) for a Book store in which the users can see different books, add any book to their shopping cart (Comming soon) and search for any specific book (Comming soon).",
    tech: [HTML, SASS, JavaScript],
    buttons: 2,
    live: "https://biblion.netlify.app/",
    repository: "https://github.com/RayanEncarnacion/Biblion",
  },
];

export const miniProjectsDetails = [
  {
    title: "Fooders",
    img: FDimg,
    description:
      "This a simple app in which you can search for food's name or ingredients to get a list of recipes. You can click on a recipe to show a container with all the ingredients, more details and a button to go to the source page",
    tech: [HTML, CSS, React],
    buttons: 2,
    live: "https://fooders-react.netlify.app/",
    repository: "https://github.com/RayanEncarnacion/Fooders-React",
  },
  {
    title: "Pig Game",
    img: PGimg,
    description:
      "This is my first project build with React. A simple game created to showcase knowledge on React using the fundamentals of state managment using Context for global states, useState to manage local state and useEffect to manage side effects.",
    tech: [HTML, CSS, React],
    buttons: 2,
    live: "https://rayan-pig-game.netlify.app/",
    repository: "https://github.com/RayanEncarnacion/React-Pig-Game",
  },
  {
    title: "Form Validation",
    img: Vimg,
    description:
      "This is just a practice project to validate data provided by the user trough a form while maintaining a nice UX using yup (library) and useForm (Hook).",
    tech: [HTML, CSS, React],
    buttons: 2,
    live: "https://rayan-validation.netlify.app/",
    repository: "https://github.com/RayanEncarnacion/FormValidation-react",
  },
  {
    title: "Dreamed House",
    img: DHimg,
    description:
      "This is a modern landing page (Front End only) for a Real State Company in which the users can see different properties with information about the price, bedrooms and bathrooms and a comment about the propeties.",
    tech: [HTML, SASS, Bootstrap, JavaScript, GSAP],
    buttons: 2,
    live: "https://dreamedhouse.netlify.app/",
    repository: "https://github.com/RayanEncarnacion/dreamedhouse",
  },
  {
    title: "ToDo App",
    img: TDimg,
    description:
      "Simple To Do App created to practice partials, variables and mixins in SASS and JavaScript to use Local Storage and build a CRUD (create, read, update and delete) application.",
    tech: [HTML, SASS, JavaScript],
    buttons: 2,
    live: "https://rayan-mini-todoapp.netlify.app/",
    repository: "https://github.com/RayanEncarnacion/TodoAppProject",
  },
];

import React, { Fragment } from "react";
import Header from "./UI/Header";
import AboutMe from "./Components/About Me/AboutMe";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;

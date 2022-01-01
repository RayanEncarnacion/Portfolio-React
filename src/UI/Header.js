import Navigation from "../Components/Navigation/Navigation";
import Hero from "../Components/Hero/Hero";

const bgc = { backgroundColor: "#2f4e6a" };

const Header = () => {
  return (
    <header style={bgc}>
      <Navigation />
      <Hero />
    </header>
  );
};

export default Header;

import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import LinksList from "../../UI/LinksList";
import StyledSectionWrapper from "../../UI/Styled/StyledSectionWrapper";
import FOOTER_LINKS from "./footerLinks";

const StyledFooter = styled(StyledSectionWrapper)`
  & .footer-icons {
    & a {
      margin-left: 0.5em;
      font-size: 1.5em;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter as="footer" section={true} centered={true} accent={true}>
      <div className="footer-icons">
        <a
          href="https://github.com/RayanEncarnacion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rayan-encarnaci%C3%B3n-b202b716a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <LinksList footer={true} linksArray={FOOTER_LINKS} />
      @2021 Rayan Encarnación
    </StyledFooter>
  );
};

export default Footer;

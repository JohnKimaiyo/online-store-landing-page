import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import "./footer.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Footer classname="--flex-center" data-theme={theme}>
      <p>Chisombirir &copy 2022</p>
    </Footer>
  );
};

export default Footer;

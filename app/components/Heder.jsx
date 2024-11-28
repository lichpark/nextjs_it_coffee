import { headerStyle } from "../style/HeaderStyle";

const Header = ({ children }) => {
  return <header className={headerStyle.headerstyle}>{children}</header>;
};

export default Header;

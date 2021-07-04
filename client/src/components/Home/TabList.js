import logo from "../../assets/logo.png";
import homeRun from "../../assets/home-run.svg";
import avatar from "../../assets/avatar.svg";
import briefcase from "../../assets/briefcase.svg";
import paper from "../../assets/paper.svg";
import mail from "../../assets/mail.svg";
import Tab from './Tab';

const TabList = () => {
  return (
    <>
      {/* ==============================LOGO=============================== */}
      <div className="logo">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="logo" />
        </a>
      </div>
      {/* =============================LIST MENU============================= */}
      <div className="menu">
        <ul>
          <Tab icon={homeRun} content="Home" />
          <Tab icon={avatar} content="About" />
          <Tab icon={briefcase} content="Portfolio" />
          <Tab icon={paper} content="News" />
          <Tab icon={mail} content="Contact" />
        </ul>
      </div>
      {/* =============================COPYRIGHT================================== */}
      <div className="copyright">
        <p>
          © 2021 Tokyo <br /> Created by
          <a href="#" target="_blank" rel="noreferrer">
            Ib-Themes
          </a>
        </p>
      </div>
    </>
  );
};

export default TabList;

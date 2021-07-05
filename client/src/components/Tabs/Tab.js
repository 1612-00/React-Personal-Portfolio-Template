import { useContext } from "react";
import { TabContext } from "./../contexts/TabContext";

const Tab = ({ icon, content }) => {
  const { tabState: {tabSelected }, handleSelectedTab } = useContext(TabContext);

  const handleClick = () => {
    handleSelectedTab(content)
  }

  const tabName = (tabSelected === content) ? "react-tabs__tab active" : "react-tabs__tab"

  return (
    <li
      className={tabName}
      onClick={handleClick}
    >
      <img src={icon} alt="icon" className="svg" />
      <span className="menu-content">{content}</span>
    </li>
  );
};

export default Tab;

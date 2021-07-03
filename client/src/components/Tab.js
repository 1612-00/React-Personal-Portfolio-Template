const Tab = ({icon, content}) => {
  return (
    <div>
      <li
        className="react-tabs__tab"
        id="react-tabs-0"
      >
        <img src={icon} alt="icon" className="svg" />
        <span className="menu-content">{content}</span>
      </li>
    </div>
  );
};

export default Tab;

import { useContext } from "react";
import { TabContext } from "./contexts/TabContext";
import HomeContainer from "./Home/HomeContainer";
import AboutContainer from "./About/AboutContainer";
import PortfolioContainer from "./Portfolio/PortfolioContainer";

const Container = () => {
  const {
    tabState: { tabSelected },
  } = useContext(TabContext);

  console.log(tabSelected === "Home");

  return (
    <>
      <div className="react-tabs__tab-panel">
        {tabSelected === "Home" && <HomeContainer />}
        {tabSelected === "About" && <AboutContainer />}
        {tabSelected === "Portfolio" && <PortfolioContainer />}
        {tabSelected === "News" && <HomeContainer />}
        {tabSelected === "Contact" && <HomeContainer />}
      </div>
    </>
  );
};

export default Container;

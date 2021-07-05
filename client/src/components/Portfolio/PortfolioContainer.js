import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import portfolio1 from "../../assets/portfolio-1.jpg";
import portfolio2 from "../../assets/portfolio-2.jpg";
import portfolio3 from "../../assets/portfolio-3.jpg";
import portfolio4 from "../../assets/portfolio-4.jpg";
import "../../css/Portfolio.css";
import PortfolioItem from "./PortfolioItem";
import SimpleReactLightBox, { SRLWrapper } from "simple-react-lightbox";

const PortfolioContainer = () => {
  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-title">
          <div className="title-flex">
            <div className="left">
              <span>portfolio</span>
              <h3>Creative Portfolio</h3>
            </div>
          </div>
        </div>
        <div className="portfolio-filter">
          <Tabs>
            <TabList>
              <Tab>All</Tab>
              <Tab>Ui/Ux</Tab>
              <Tab>Website</Tab>
              <Tab>Graphic</Tab>
              <Tab>Creative</Tab>
            </TabList>

            <TabPanel>
              <ul className="portfolio-list">
                <SRLWrapper>
                  <PortfolioItem image={portfolio1} caption="Portfolio" />
                  <PortfolioItem image={portfolio2} caption="Portfolio" />
                  <PortfolioItem image={portfolio3} caption="Portfolio" />
                  <PortfolioItem image={portfolio4} caption="Portfolio" />
                </SRLWrapper>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className="portfolio-list">
                <SRLWrapper>
                  <PortfolioItem image={portfolio3} caption="Ui/Ux" />
                  <PortfolioItem image={portfolio4} caption="Ui/Ux" />
                </SRLWrapper>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className="portfolio-list">
                <SRLWrapper>
                  <PortfolioItem image={portfolio1} caption="Website" />
                  <PortfolioItem image={portfolio2} caption="Website" />
                </SRLWrapper>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className="portfolio-list">
                <SRLWrapper>
                  <PortfolioItem image={portfolio3} caption="Graphic" />
                  <PortfolioItem image={portfolio4} caption="Graphic" />
                </SRLWrapper>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className="portfolio-list">
                <SRLWrapper>
                  <PortfolioItem image={portfolio1} caption="Creative" />
                  <PortfolioItem image={portfolio2} caption="Creative" />
                </SRLWrapper>
              </ul>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default PortfolioContainer;

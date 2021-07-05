import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import portfolio1 from "../../assets/portfolio-1.jpg";
import portfolio2 from "../../assets/portfolio-2.jpg";
import portfolio3 from "../../assets/portfolio-3.jpg";
import portfolio4 from "../../assets/portfolio-4.jpg";
import '../../css/Portfolio.css';

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
              <ul>
                <li>
                  <a href="#">
                    <img src={portfolio1} alt="portfolioImg" />
                    <img src={portfolio2} alt="portfolioImg" />
                    <img src={portfolio3} alt="portfolioImg" />
                    <img src={portfolio4} alt="portfolioImg" />
                  </a>
                </li>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul>
                <li>
                  <a href="#">
                    <img src={portfolio3} alt="portfolioImg" />
                    <img src={portfolio4} alt="portfolioImg" />
                  </a>
                </li>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul>
                <li>
                  <a href="#">
                    <img src={portfolio1} alt="portfolioImg" />
                    <img src={portfolio2} alt="portfolioImg" />
                  </a>
                </li>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul>
                <li>
                  <a href="#">
                    <img src={portfolio3} alt="portfolioImg" />
                    <img src={portfolio4} alt="portfolioImg" />
                  </a>
                </li>
              </ul>
            </TabPanel>
            <TabPanel>
              <ul>
                <li>
                  <a href="#">
                    <img src={portfolio1} alt="portfolioImg" />
                    <img src={portfolio2} alt="portfolioImg" />
                  </a>
                </li>
              </ul>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default PortfolioContainer;

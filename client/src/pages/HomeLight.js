import "../css/HomeLight.css";
import TabList from './../components/TabList';
import Container from './../components/Container';

const HomeLight = () => {
  return (
    <>
      <div className="all-wrap">
        <div className="react-tabs">
        {/* ===================================TAB LIST==================================== */}
          <ul className="react-tabs__tab-list">
            <div className="left-part">
              <div className="left-part-inner">
                <TabList />
              </div>
            </div>
          </ul>

          {/* ===================================CONTAINER=================================== */}
          <div className="right-part">
            <div className="right-part_in">
              <div className="tm_section">
                <div className="container">
                  <Container />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLight;

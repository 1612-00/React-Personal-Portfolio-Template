import React, { useState } from "react";
import "../css/HomeLight.css";
import ListTab from "../components/Tabs/TabList";
import Container from "./../components/Container";
import Modal from "../components/About/Modal";
import TabContextProvider from "../components/contexts/TabContext";

export const AboutContext = React.createContext();

const HomeLight = () => {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const hideModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <TabContextProvider>
        <AboutContext.Provider value={showModal}>
          <div className="all-wrap">
            <div className="react-tabs">
              {/* ===================================TAB LIST==================================== */}
              <ul className="react-tabs__tab-list">
                <div className="left-part">
                  <div className="left-part-inner">
                    <ListTab />
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
          <div className="modal-container">
            <Modal show={openModal} handleClose={hideModal} />
          </div>
        </AboutContext.Provider>
      </TabContextProvider>
    </>
  );
};

export default HomeLight;

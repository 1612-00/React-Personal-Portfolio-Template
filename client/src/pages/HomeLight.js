import React, { useState } from "react";
import "../css/HomeLight.css";
import TabList from "./../components/Home/TabList";
import Container from "./../components/Container";
import Modal from "../components/About/Modal";

export const AboutContext = React.createContext();

const HomeLight = () => {
  const [openModal, setOpenModal] = useState(true);

  const showModal = () => {
    setOpenModal(true);
  };

  const hideModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <AboutContext.Provider value={showModal}>
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
        <div className="modal-container">
          <Modal show={openModal} handleClose={hideModal} />
        </div>
      </AboutContext.Provider>
    </>
  );
};

export default HomeLight;

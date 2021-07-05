import "../../css/Modal.css";
import SkillPoint from "./SkillPoint";
import Slider from "react-slick";
import partner1 from "../../assets/1.png";
import partner2 from "../../assets/2.png";
import partner3 from "../../assets/3.png";
import partner4 from "../../assets/4.png";
import partner5 from "../../assets/5.png";
import partner6 from "../../assets/6.png";
import cancel from "../../assets/cancel.svg";

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,  
    responsive: [
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className={showHideClassName}>
      <button className="cancel-btn" type="button" onClick={handleClose}>
        <img src={cancel} alt="closeBtn" />
      </button>
      <section className="modal-main">
        <div className="modal-main-container">
          <div className="skill">
            <div className="left">
              <div className="title">
                <h3>Photography Skills</h3>
              </div>
              <div className="progress">
                <SkillPoint skill="Wedding Photography" dataValue="95" />
                <SkillPoint skill="Lifestyle Photography" dataValue="80" />
                <SkillPoint skill="Family Photography" dataValue="90" />
              </div>
            </div>
            <div className="right">
              <div className="title">
                <h3>Language Skills</h3>
              </div>
              <div className="progress">
                <SkillPoint skill="English" dataValue="95" />
                <SkillPoint skill="Japanese" dataValue="90" />
                <SkillPoint skill="Arabian" dataValue="85" />
              </div>
            </div>
          </div>

          <div className="fun-fact">
            <div className="title">
              <h3>Fun Facts</h3>
            </div>
            <div className="box-container">
              <div className="box">
                <h3>777+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="box">
                <h3>3K</h3>
                <p>Happy Clients</p>
              </div>
              <div className="box">
                <h3>9K+</h3>
                <p>Lines of Code</p>
              </div>
            </div>
          </div>

          <div className="partners">
            <div className="title">
              <h3>Our Partners</h3>
            </div>

            <ul className="partners-container">
              <Slider {...settings}>
                <div>
                  <div className="partner-box">
                    <img src={partner1} alt="partnerImg" />
                  </div>
                </div>
                <div>
                  <div className="partner-box">
                    <img src={partner2} alt="partnerImg" />
                  </div>
                </div>
                <div>
                  <div className="partner-box">
                    <img src={partner3} alt="partnerImg" />
                  </div>
                </div>
                <div>
                  <div className="partner-box">
                    <img src={partner4} alt="partnerImg" />
                  </div>
                </div>
                <div>
                  <div className="partner-box">
                    <img src={partner5} alt="partnerImg" />
                  </div>
                </div>
                <div>
                  <div className="partner-box">
                    <img src={partner6} alt="partnerImg" />
                  </div>
                </div>
              </Slider>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;

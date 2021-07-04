import "../../css/Modal.css";
import SkillPoint from "./SkillPoint";

const Modal = ({ handleClose, show }) => {
  console.log(show);
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <button type="button" onClick={handleClose}>
        Close
      </button>
      <section className="modal-main">
        <div className="skill">
          <div className="left">
            <div className="about_title">
              <h3>Photography Skills</h3>
            </div>
            <div className="progress">
              <SkillPoint skill="Wedding Photography" dataValue="95" />
              <SkillPoint skill="Lifestyle Photography" dataValue="80" />
              <SkillPoint skill="Family Photography" dataValue="90" />
            </div>
          </div>
          <div className="right">
            <div className="about_title">
              <h3>Language Skills</h3>
            </div>
            <div className="progress">
              <SkillPoint skill="English" dataValue="95" />
              <SkillPoint skill="Japanese" dataValue="90" />
              <SkillPoint skill="Arabian" dataValue="85" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;

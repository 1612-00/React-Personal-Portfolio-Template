import avatar from "../../assets/1.jpg";
import "../../css/AboutContainer.css";
import { AboutContext } from "../../pages/HomeLight";
import cancel from "../../assets/cancel.svg";

const AboutContainer = () => {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-img">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="description">
          <h3 className="title">Adriano Smith & Photographer</h3>
          <div className="content">
            <div className="left">
              <p className="container_text">
                Hello, I am a creative photographer based in New York and happy
                to travel all over Europe to capture your big day in candid and
                authentic photos. I will create a lasting memory of the people.
              </p>
              <AboutContext.Consumer>
                {
                  (value) => <button onClick={value}>Read More</button>
                }
              </AboutContext.Consumer>
            </div>
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>
                    01.07.1990
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span>
                    31
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address:</span>
                    Ave 11, New York, USA
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mail@gmail.com" target="_blank">
                      mail@gmail.com
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="+77 022 177 05 05" target="_blank">
                      +77 022 177 05 05
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Study:</span>
                    Univercity of Texas
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance:</span>
                    Available
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContainer;

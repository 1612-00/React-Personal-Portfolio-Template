import light from "../assets/light.png";
import dark from "../assets/dark.png";
import "../css/Home.css";

const Home = () => {
  return (
    <>
      <div className="container-wrapper">
        <div className="short-info">
          <h2>TOKYO</h2>
          <h3>React Personal Portfolio Template</h3>
        </div>

        <span className="intro_line"></span>
        <span className="intro_line_2"></span>
        <span className="intro_line_3"></span>

        <div className="demos">
          <div className="left">
            <a href="/home-light" target="_blank">
              <div className="desc">
                <img src={light} alt="image" />
                <h3 className="title">Light Demo</h3>
              </div>
            </a>
          </div>
          <div className="right">
            <a href="#" target="_blank">
              <div className="desc">
                <img src={dark} alt="image" />
                <h3 className="title">Dark Demo</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="fixed-price">
          <span className="anim"></span>
          <span className="anim"></span>
          <span className="anim"></span>
          <a href="#" target="_blank" className="pricing_info anim">
            -50%
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;

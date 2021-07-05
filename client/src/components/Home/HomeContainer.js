import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import dribbble from "../../assets/dribbble.svg";
import tiktok from "../../assets/tik-tok.svg";
import SocialLink from "./SocialLink";

const HomeContainer = () => {
  return (
    <>
      <div className="tm_home">
        <div className="home_content">
          {/* =============================AVATAR============================ */}
          <div className="avatar">
            <div className="image avatar-img"></div>
          </div>
          {/* ===============================DETAIL============================ */}
          <div class="details">
            <h3 class="name">Adriano Smith</h3>
            <p class="job">
              Creative Photographer based in New York and happy to travel all
              over Europe to capture photos.
            </p>
            <ul class="social">
              <SocialLink link="#" icon={facebook} />
              <SocialLink link="#" icon={twitter} />
              <SocialLink link="#" icon={instagram} />
              <SocialLink link="#" icon={dribbble} />
              <SocialLink link="#" icon={tiktok} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;

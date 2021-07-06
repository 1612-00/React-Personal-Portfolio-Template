import "../../css/NewsContainer.css";
import news1 from "../../assets/news-1.jpg";
import news2 from "../../assets/news-2.jpg";
import news3 from "../../assets/news-3.jpg";
import news4 from "../../assets/news-4.jpg";
import Card from "./Card";

const NewsContainer = () => {
  return (
    <>
      <div className="news-container">
        <div className="news-title">
          <div className="title-flex">
            <div className="left">
              <span>news</span>
              <h3>Latest News</h3>
            </div>
          </div>
        </div>
        <ul>
          <div className="cards-wrapper">
            <Card
              image={news1}
              author="Alex Watson"
              date="05 April 2021"
              title="Format releases a new tool that enables direct video hosting"
            />
            <Card
              image={news2}
              author="Brook Kennedy"
              date="22 March 2021"
              title="Sony announced two new full frame cameras with zero fanfare"
            />
            <Card
              image={news3}
              author="Paola Atkins"
              date="15 Feb 2021"
              title="Why every photographer should shoot film, even in 2021"
            />
            <Card
              image={news4}
              author="Kevin Stone"
              date="22 Jan 2021"
              title="Stay creative in lockdown with these fun photo projects"
            />
          </div>
        </ul>
      </div>
    </>
  );
};

export default NewsContainer;

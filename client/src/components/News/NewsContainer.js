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
          <Card
            image={news1}
            author="Alex Watson"
            date="05 April 2021"
            title="Format releases a new tool that enables direct video hosting"
          />
        </ul>
      </div>
    </>
  );
};

export default NewsContainer;

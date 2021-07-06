const Card = ({ image, author, date, title }) => {
  return (
    <>
      <li>
        <div className="list-inner">
          <div className="image">
            <img src={image} alt="img" />
          </div>
          <div className="details">
            <div className="extra">
              <p className="date">
                By&nbsp;
                <a href="#">{author}</a>
                &nbsp;/&nbsp;
                <span>{date}</span>
              </p>
              <hr />
            </div>
            <h3 className="title">{title}</h3>
            <div className="read-more">
              <a href="#">
                <span>Read More</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Card;

const PortfolioItem = ({image, caption }) => {
  return (
    <li>
      <div className="inner">
        <a href={image}>
          <img src={image} alt={caption} srl_gallery_image="true" />
        </a>
      </div>
    </li>
  );
};

export default PortfolioItem;

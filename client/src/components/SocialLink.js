const SocialLink = ({link, icon}) => {
  return (
    <>
      <li>
        <a href={link} target="_blank" rel="noreferrer">
          <img class="svg" src={icon} alt="social" />
        </a>
      </li>
    </>
  );
};

export default SocialLink;

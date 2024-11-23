const Footer = () => {
  return (
    <footer className="Footer">
      <div className="SocialLinks">
        <a href="">
          <img
            src="src\assets\instagram.svg"
            alt="Instagram"
            className="SocialIcon"
          />
        </a>
        <a href="">
          <img
            src="src\assets\facebook.svg"
            alt="Facebook"
            className="SocialIcon"
          />
        </a>
        <a href="">
          <img
            src="src\assets\linkedin.svg"
            alt="LinkedIn"
            className="SocialIcon"
          />
        </a>
        <a href="">
          <img
            src="src\assets\github.svg"
            alt="Github"
            className="SocialIcon"
          />
        </a>
      </div>
      <p className="CopyRights">
        Copyrights © 2024 . Design Test Fusion . Barista Brews . All rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;

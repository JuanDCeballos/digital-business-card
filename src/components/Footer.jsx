import twitterIcon from '../assets/Twitter Icon.png';
import facebookIcon from '../assets/Facebook Icon.png';
import instagramIcon from '../assets/Instagram Icon.png';
import gitHubIcon from '../assets/GitHub Icon.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <img className="icon" src={twitterIcon} />
      <img className="icon" src={facebookIcon} />
      <img className="icon" src={instagramIcon} />
      <img className="icon" src={gitHubIcon} />
    </div>
  );
};

export default Footer;

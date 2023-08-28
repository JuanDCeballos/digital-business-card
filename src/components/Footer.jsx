import twitterIcon from '../assets/Twitter Icon.png';
import facebookIcon from '../assets/Facebook Icon.png';
import instagramIcon from '../assets/Instagram Icon.png';
import gitHubIcon from '../assets/GitHub Icon.png';

const Footer = () => {
  return (
    <div className='footer-container'>
      <img src={twitterIcon} />
      <img src={facebookIcon} />
      <img src={instagramIcon} />
      <img src={gitHubIcon} />
    </div>
  );
};

export default Footer;

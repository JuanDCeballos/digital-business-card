import profilePicture from '../assets/Rectangle 90.png';
import mailIcon from '../assets/Mail.png';
import linkedInIcon from '../assets/LinkedIn.png';

const Info = () => {
  return (
    <div className="info-container">
      <img src={profilePicture} />
      <h1 className="info-container-title title">Laura Smith</h1>
      <p>Fronted Developer</p>
      <p>laurasmith.website</p>
      <div className="info-container-buttons">
        <button className="cta-email cta">
          <img src={mailIcon} /> Email
        </button>
        <button className="cta-linkedIn cta">
          <img src={linkedInIcon} /> LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Info;

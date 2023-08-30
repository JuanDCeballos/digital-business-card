import profilePicture from '../assets/Rectangle 90.png';
import mailIcon from '../assets/Mail.png';
import linkedInIcon from '../assets/LinkedIn.png';

const Info = () => {
  return (
    <div className='info-container'>
      <img src={profilePicture} />
      <div className='info-container-content'>
        <h1 className='info-container-title title'>Laura Smith</h1>
        <p className='info-container-profession'>Fronted Developer</p>
        <p className='info-container-website'>laurasmith.website</p>
        <div className='info-container-buttons'>
          <button className='cta-email cta'>
            <img src={mailIcon} /> Email
          </button>
          <button className='cta-linkedIn cta'>
            <img src={linkedInIcon} /> LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;

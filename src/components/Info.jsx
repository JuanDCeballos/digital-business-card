import profilePicture from '../assets/Rectangle 90.png';
import mailIcon from '../assets/Mail.png';
import linkedInIcon from '../assets/LinkedIn.png';

const Info = () => {
  return (
    <div className='info-container'>
      <img src={profilePicture} />
      <h1>Laura Smith</h1>
      <p>Fronted Developer</p>
      <p>laurasmith.website</p>
      <button>
        <img src={mailIcon} /> Email
      </button>
      <button>
        <img src={linkedInIcon} /> LinkedIn
      </button>
    </div>
  );
};

export default Info;

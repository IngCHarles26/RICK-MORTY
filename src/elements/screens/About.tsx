import './styles/About.scss';
import abouteImg from '../../assets/about.jpg';
import AboutContact from '../components/aboutContact';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

function About() {
  return ( 
    <div className='about'>
      <img src={abouteImg} alt="about_image" />
      <div className='about-part1'>
        
      </div>
      <div className='about-part2'>
        <h2>Carlos Condori Ll.</h2>
        <p>Trainee Full-Stack developer</p>
        <p>I am taking my first solid steps in this fascinating world, I like to enable the functionality of amazing and scalable products with great user experiences</p>
        <AboutContact />
      </div>
      <Link className='btnHomeAbout' to={routes.home}>
        <button>
            HOME
        </button>
      </Link>
    </div>
  );
}

export default About;
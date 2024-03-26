import './styles/Landing.scss'
import heroImg from '../../assets/hero.png';
import LogoDev from '../components/logo';
import LoginButton from '../components/loginButton';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';


function Landing() {
  return ( 
    <div className='Landing'>
      <img src={heroImg} alt="" className='jello-horizontal' />
      <p>by</p>
      <p>{"< CarlosCo_Dev />"}</p>
        {/* GO */}
        <LoginButton />
    </div>
  );
}

export default Landing;
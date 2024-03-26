import './styles/Landing.scss'
import heroImg from '../../assets/hero.png';
import LoginButton from '../components/loginButton';


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
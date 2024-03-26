import { Link } from 'react-router-dom';
import './styles/loginButton.scss'
import { routes } from '../../routes';

function LoginButton() {
  return ( 
    <Link to={routes.home}>
      <button className="btn" type="button">
        <strong>LET'S GO</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
    </Link>
  );
}

export default LoginButton;
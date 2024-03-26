import { Link } from 'react-router-dom';
import './styles/logo.css'
import { routes } from '../../routes';

function LogoDev() {
  return (
    <Link to={routes.about}>
      <p className="logoDevCarlosCo">{'< CarlosCo_Dev />'}</p>
    </Link>
  );
}

export default LogoDev;
import { Link } from 'react-router-dom';
import './styles/Error.scss'
import { routes } from '../../routes';

function Error() {
  return ( 
    <div className="wrapper">
      <div className="img-wrapper">
        <h2>
          <span>4</span>
          <img className='errorImg' src="https://staticdelivery.nexusmods.com/mods/1151/images/528-0-1447526230.png" alt="rotate" />
          <span>4</span>
        </h2>
      </div>
      <p>The page you are trying to search has been <br/> moved to another universe.</p>
      <Link to={routes.home}>
        <button type="button">HOME</button>
      </Link>
    </div>
  );
}

export default Error;
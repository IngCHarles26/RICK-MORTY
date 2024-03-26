import { useDispatch } from 'react-redux';
import './styles/navButton.scss'
import { delFilters } from '../../redux/slices/charactersSlice';

interface Props{
  name:string,
}

function NavButton(props:Props) {
  const {name} = props;
  const dispatch = useDispatch();


  return ( 
    <button className="button" data-text="Awesome" onClick={()=>dispatch(delFilters())}>
        <span className="actual-text">&nbsp;{name}&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;{name}&nbsp;</span>
    </button>
  );
}

export default NavButton;
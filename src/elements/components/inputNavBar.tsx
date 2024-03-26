import { useSelector } from 'react-redux';
import './styles/inputNavBar.scss';
import { TypeStore } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { setSearchInput } from '../../redux/slices/charactersSlice';

function InputNavBar() {
  const dispatch = useDispatch();
  const {searchInput} = useSelector((st:TypeStore)=>st.character);
  
  return ( 
    <div className="inputNavBar">
      <input 
        className="input" 
        value={searchInput}
        onChange={(e)=>dispatch(setSearchInput(e.target.value))}
        placeholder="Search by ID" 
        required type="text"/>
    </div>
  );
}

export default InputNavBar;
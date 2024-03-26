import { useSelector } from 'react-redux';
import './styles/optionSearch.scss';
import { TypeStore } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { setSearchType } from '../../redux/slices/charactersSlice';


function OptionSearch() {
  const dispatch = useDispatch();
  const typeSearch = useSelector((st:TypeStore)=>st.character.searchType)

  return ( 
    <div className="optionSearch">
      <input 
        value="value-1" 
        name="value-radio" 
        id="value-1" 
        type="radio" 
        onClick={()=>dispatch(setSearchType(true))}
        onChange={()=>{}}
        checked={typeSearch}
        />
      <label htmlFor="value-1">Character</label>
      <input 
        value="value-2" 
        name="value-radio" 
        id="value-2" 
        type="radio" 
        onClick={()=>dispatch(setSearchType(false))}
        onChange={()=>{}}
        checked={!typeSearch}/>
      <label htmlFor="value-2">Episode</label>
    </div>
  );
}

export default OptionSearch;
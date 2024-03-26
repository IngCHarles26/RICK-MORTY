import './styles/navBar.scss'

import InputNavBar from "./inputNavBar";
import NavButton from "./navButton";
import OptionSearch from "./optionSearch";
import { useSelector,useDispatch } from 'react-redux';
import { TypeStore } from '../../redux/store';
import { filterRepeatedIds, getRandomId, toPutFirst, transInputIds } from '../../api/helpers/funcs';
import { RiMoApi, apiRoutes, maxId } from '../../api/api';
import { addCharacters, setFilters, setIdCharacters, setSearchInput } from '../../redux/slices/charactersSlice';
import { setCurrentPage } from '../../redux/slices/pageSlice';

function NavBar() {
  const dispatch = useDispatch();
  const {searchInput,searchType,idCharacters,species,origin,gender,filters} = useSelector((st:TypeStore)=>st.character);


  const handleSearch = async ()=>{
    const maxIdValue = searchType ? maxId.character : maxId.episode;

    let inputFiltered = searchInput 
      ? transInputIds(searchInput,maxIdValue)
      : getRandomId(idCharacters,maxIdValue);
    let idsToGetInfo:number[] = [];

    if(!inputFiltered.length){
      dispatch(setSearchInput(''))
      return window.alert('Invalid IDs')
    }

    if(searchType){
      //character
      idsToGetInfo = inputFiltered;
    }else{
      //episode
      try {
        const {data} = await RiMoApi.get(apiRoutes.episode(inputFiltered));
        data.forEach(episode=>{
          episode.characters.forEach(character=>{
            let _id = +character.replaceAll(/\D+/g,'');
            if(!idsToGetInfo.includes(_id)) idsToGetInfo.push(_id)
          })
        })
      } catch (error) {
        console.log(error.message)
      }
      
    }
    const idsToPutFirst = [...idsToGetInfo];
    idsToGetInfo = filterRepeatedIds(idsToGetInfo,idCharacters);
    if(idsToGetInfo.length){
        try {
          const {data} = await RiMoApi.get(apiRoutes.character(idsToGetInfo));
          dispatch(addCharacters({ids:idsToGetInfo,idsData:data}))
          dispatch(setCurrentPage(1))
        } catch (error) {
          console.log(error.message)
        }
      }else{
        dispatch(setIdCharacters(toPutFirst(idCharacters,idsToPutFirst)))
      }
      dispatch(setSearchInput(''))
  }

  // console.log(filters)

  return ( 
    <nav className="NavBar">
      <div>
        <OptionSearch />
        <InputNavBar />
        <button onClick={()=>handleSearch()}>
          <span>🔎</span>
        </button>
      </div>
      <select value={filters.sort} onChange={(e)=>{dispatch(setFilters({...filters,sort:e.target.value}));dispatch(setCurrentPage(1))}}>
        <option value='none'>Order</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
      <select value={filters.specie} onChange={(e)=>{dispatch(setFilters({...filters,specie:e.target.value}));dispatch(setCurrentPage(1))}}>
        <option value="">Specie</option>
        {species.map(el=><option key={el+'_specie'} value={el}>{el}</option>)}
      </select>
      <select value={filters.gender} onChange={(e)=>{dispatch(setFilters({...filters,gender:e.target.value}));dispatch(setCurrentPage(1))}}>
        <option value="">Gender</option>
        {gender.map(el=><option key={el+'_gender'} value={el}>{el}</option>)}
      </select>
      <select value={filters.origin} onChange={(e)=>{dispatch(setFilters({...filters,origin:e.target.value}));dispatch(setCurrentPage(1))}}>
        <option value="">Origin</option>
        {origin.map(el=><option key={el+'_origin'} value={el}>{el}</option>)}
      </select>
      <NavButton name='Clear' />
    </nav>
  );
}

export default NavBar;
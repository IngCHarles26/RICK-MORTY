import './styles/Home.scss';

import Cards from '../components/cards';
import NavBar from '../components/navBar';
import Pagination from '../components/pagination';
import LogoDev from '../components/logo';
import Detail from './Detail';
import { useSelector } from 'react-redux';
import { TypeStore } from '../../redux/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCharSlice } from '../../redux/slices/charactersSlice';
import { setCurrentPage } from '../../redux/slices/pageSlice';

function Home() {
  const data = useSelector((st:TypeStore)=>st.character)
  const id = useSelector((st:TypeStore)=>st.id.id);
  const dispatch = useDispatch();
  
  const homeClass = 'Home' + (id?' hiddenOver' : '');

  useEffect(()=>{
    const  info = localStorage.getItem('information');
    if(info){
      const {characters,idCharacters,species,origin} = JSON.parse(info);
      console.log({characters,idCharacters,species,origin})
      if(characters && idCharacters.length){
        dispatch(setCharSlice({characters,idCharacters,species,origin}))
        dispatch(setCurrentPage(1))
      }
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('information',JSON.stringify(data))
  },[data])

  return ( 
    <div className={homeClass}>
      <NavBar />
      <Cards />
      <Pagination />
      <div className='Logo'>
        <LogoDev />
      </div>
      {id && <Detail />} 
    </div>
  );
}

export default Home;
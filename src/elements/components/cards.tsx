import { useSelector } from 'react-redux';
import Card from './card';
import './styles/cards.scss';
import { TypeStore } from '../../redux/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTotalCards } from '../../redux/slices/pageSlice';

// const h = ()=> window.innerHeight;
// const w = ()=> window.innerWidth;

function Cards() {
  const dispatch = useDispatch();
  const {characters,filteredChars} = useSelector((st:TypeStore)=>st.character);
  const {currentPage,cardPerPage} = useSelector((st:TypeStore)=>st.page)
  const start = (currentPage-1)*cardPerPage;
  const end = currentPage * cardPerPage;


  useEffect(()=>{
    dispatch(setTotalCards(filteredChars.length))
  },[filteredChars])

  return ( 
    <div className="Cards">
      {
        filteredChars.slice(start,end).map((id,ix)=>{
          const {image,name,status,species,gender,origin,location} = characters[id]
          return(
            <Card
              key={`${ix}_${id}_Card`}
              id={+id}
              image={image}
              name={name}
              status={status}
              gender={gender}
              species={species}
              origin={origin.name}
              location={location.name}
            />
          )
        })
      }
    </div>
  );
}

export default Cards;
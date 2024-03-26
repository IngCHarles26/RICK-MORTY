import './styles/card.scss';
import imgSpecie from '../../assets/huella.png';
import imgGender from '../../assets/simbolos-de-genero.png';
import imgOrigin from '../../assets/pais.png';
import imgLocation from '../../assets/hogar.png';
import { useDispatch } from 'react-redux';
import { setIdDetail } from '../../redux/slices/idSlice';

// const {image,name,status,species,gender,origin,location} = defData
// const boolean = false;

const backColor = {
  Alive: 'aliveStatus',
  Dead: 'deadStatus',
  unknown: 'unkStatus',
}

interface Props {
  id:number,
  image: string,
  name: string,
  status: string,
  gender: string,
  species: string,
  origin: string,
  location: string
}

function Card(props:Props) {
  const {id,image,name,status,species,gender,origin,location} = props;

  const dispatch = useDispatch();

  if(!id){
    return (<Loading />)
  }

  return ( 
    <div className={"card "+backColor[status]} onClick={()=>dispatch(setIdDetail(id))}>
      <div className={'cardInfo'}>
        <p><img src={imgLocation} alt="image_Location" /> {location}</p>
        <p><img src={imgSpecie} alt="image_Specie" /> {species}</p>
        <p><img src={imgGender} alt="image_Gender" /> {gender}</p>
        <p><img src={imgOrigin} alt="image_Origin" /> {origin}</p>
      </div>
      <div className={"cover "+backColor[status]}>
        <img src={image} alt="card_image" />
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default Card;

function Loading(){
  return(
    <div className="card">
      <div className="loader">
        <div className="scanner">
          <span>Loading...</span>
        </div>
      </div>
    </div>
  )
}
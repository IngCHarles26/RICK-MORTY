import './styles/Detail.scss';

import imgStatus from '../../assets/heartbeat.png';
import imgName from '../../assets/id-card.png';
import imgSpecie from '../../assets/huella.png';
import imgGender from '../../assets/simbolos-de-genero.png';
import imgOrigin from '../../assets/pais.png';
import imgLocation from '../../assets/hogar.png';

import { useDispatch } from 'react-redux';
import { setIdDetail } from '../../redux/slices/idSlice';
import { useSelector } from 'react-redux';
import { TypeStore } from '../../redux/store';



function Detail() {
  const {characters} = useSelector((st:TypeStore)=>st.character);
  const {id} = useSelector((st:TypeStore)=>st.id);
  const {image,name,status,species,gender,origin,location} = characters[id]
  const dispatch =  useDispatch();

  return ( 
    <div className={'Detail'}>
      <button className="buttonClose" onClick={()=>dispatch(setIdDetail(0))}>
        <span className="X"></span>
        <span className="Y"></span>
        <div className="close">Close</div>
      </button>
      <div className="detailImage">
        <img src={image} alt="detail_image" />
      </div>
      <div className="detailContent">
        <p><img src={imgName} alt="image_Name" /> {name}</p>
        <p><img src={imgStatus} alt="image_Location" /> {status}</p>
        <p><img src={imgLocation} alt="image_Location" /> {location.name}</p>
        <p><img src={imgSpecie} alt="image_Specie" /> {species}</p>
        <p><img src={imgGender} alt="image_Gender" /> {gender}</p>
        <p><img src={imgOrigin} alt="image_Origin" /> {origin.name}</p>
      </div>
    </div>
  );
}

export default Detail;
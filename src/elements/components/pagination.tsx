import { useSelector } from 'react-redux';
import NextButton from './nextButton';
import './styles/pagination.scss';
import { TypeStore } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { changePage, setCurrentPage } from '../../redux/slices/pageSlice';
import { getArray } from '../../api/helpers/funcs';

function Pagination() {
  const dispatch =  useDispatch();
  const {numberPages,currentPage} = useSelector((st:TypeStore)=>st.page);
  const pages = getArray(numberPages)

  return ( 
    <div className='pagination'>
      <div 
        className='prev'
        onClick={()=>dispatch(changePage(-1))}>
        <NextButton />
      </div>
      <div className='pages'>
        {
          pages.map(el=>{            
            return (
              <button 
                className={+currentPage === +el ?'selectedPage':''}
                key={'pagesButton_'+el}
                onClick={()=>dispatch(setCurrentPage(+el))}
              >{el}</button>
            )
          })
        }
      </div>
      <div onClick={()=>dispatch(changePage(1))}>
        <NextButton />
      </div>
    </div>
  );
}

export default Pagination;
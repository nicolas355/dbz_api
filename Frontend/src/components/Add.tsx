import image from '../assets/add.png';
import { NavLink } from 'react-router-dom';

const Add = () => {
 return (
    <div>
      <NavLink to='/formulario'>
        <img className='image_add' src={image} alt="" />
      </NavLink>
    </div>
 );
}

export default Add;
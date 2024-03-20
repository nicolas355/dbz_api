import { Character } from "../interface/interface";
import { useNavigate } from 'react-router-dom';

const Vista: React.FC<Character> = ({
  nombre,
  especie,
  raza,
  ocupacion,
  descripcion,
  imagen_url,
  id,
  habilidades
}) => {


  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/data/:${id}`, { state: { character: { nombre, especie, raza, ocupacion, descripcion, imagen_url, id,habilidades } } });
 };

  return (
    

    
    <>
   
    
    <div className="contenedor" key={id}  onClick={handleCardClick}>
   

      <div className="card">
        <div className="card-image"> <img className="image" width={300} src={imagen_url} alt="" /> </div>
        <p className="card-title"> {nombre} </p>
        <p className="card-body">{descripcion}</p>
        <p className="footer">
          {" "}
          {ocupacion} <span className="by-name"> {especie} </span> {raza}{" "}
          <span className="date"> </span>
        </p>


        



      </div>
  
    </div>

    
    </>

  );
};

export default Vista;

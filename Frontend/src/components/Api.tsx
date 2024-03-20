import { useEffect, useState } from 'react';
import axios from 'axios';
import { Character } from '../interface/interface';
import Vista from './Vista';
const Data = () => {
  
  const [data, setData] = useState<Character[] | null> (null);
  const url = 'https://dbz-api-sczz.onrender.com/personajes/api/v1/personajes/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
    
        return setData(response.data);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchData();
  }, [url]);






  return (
    <div>

      <h1 className='h1'>Personajes</h1>
    
      {data && (
        <ul className='contenedor'>
          {data.map((item) => (
            <>
             
            <div key={item.id}>

              <Vista nombre={item.nombre} especie={item.especie} raza={item.raza} ocupacion={item.ocupacion} descripcion={item.descripcion} habilidades={item.habilidades} imagen_url={item.imagen_url} disponible={item.disponible} id={item.id} />




            </div>
         
            

            </>

          ))}
        </ul>
      )}
    </div>
  );
};

export default Data;
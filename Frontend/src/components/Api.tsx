import { useEffect, useState } from 'react';
import axios from 'axios';
import { Character } from '../interface/interface';
const Api = () => {
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
    
      {data && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.nombre}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Api;


import { useLocation } from 'react-router-dom';

const DataById = () => {
    const location = useLocation();

    const { character } = location.state;
    console.log(character)

  return (

      
      <>

        
      


 



      
    <div className="character-card">
      <div className="character-details">
        <div className="character-image">
          <img src={character.imagen_url} alt={character.nombre} />
        </div>
        <div className="character-info">
          <h2>{character.nombre}</h2>
          <p>{character.descripcion}</p>
          <div className="details">
            <div>
              <span>Especie:</span>
              <span>{character.especie}</span>
            </div>
            <div>
              <span>Raza:</span>
              <span>{character.raza}</span>
            </div>
            <div>
              <span>Ocupación:</span>
              <span>{character.ocupacion}</span>
            </div>
            <div>
              <span>Habilidades:</span>
              <span>{character.habilidades}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      </>


  )
}

export default DataById



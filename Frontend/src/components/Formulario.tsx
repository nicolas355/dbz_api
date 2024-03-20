import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function DragonBallForm() {

  const navigate=useNavigate()


  const [character, setCharacter] = useState({
    nombre: "",
    especie: "",
    raza: "",
    ocupacion: "",
    descripcion: "",
    habilidades: [''], 
    imagen_url: "",
    disponible: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'habilidades') {
      const habilidadesArray = value.split(',').map(habilidad => habilidad.trim());
      setCharacter(prevCharacter => ({
        ...prevCharacter,
        habilidades: habilidadesArray,
      }));
    } else {
      setCharacter(prevCharacter => ({
        ...prevCharacter,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://dbz-api-sczz.onrender.com/personajes/api/v1/personajes/",
        character
      );
      console.log("Respuesta del servidor:", response.data);

    navigate('/')
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div className="background">
      <h1 className="h1">Agrega Un personaje!</h1>
      <form onSubmit={handleSubmit} className="dragon-ball-form">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={character.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="especie">Especie:</label>
        <input
          type="text"
          id="especie"
          name="especie"
          value={character.especie}
          onChange={handleChange}
          required
        />

        <label htmlFor="raza">Raza:</label>
        <input
          type="text"
          id="raza"
          name="raza"
          value={character.raza}
          onChange={handleChange}
          required
        />

        <label htmlFor="ocupacion">Ocupación:</label>
        <input
          type="text"
          id="ocupacion"
          name="ocupacion"
          value={character.ocupacion}
          onChange={handleChange}
          required
        />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={character.descripcion}
          onChange={handleChange}
          required
        />

        <label htmlFor="habilidades">Habilidades (separadas por coma):</label>
        <input
          type="text"
          id="habilidades"
          name="habilidades"
          value={character.habilidades.join(', ')} // Convertir el arreglo a una cadena separada por comas
          onChange={handleChange}
          required
        />

        <label htmlFor="imagen_url">URL de la Imagen:</label>
        <input
          type="url"
          id="imagen_url"
          name="imagen_url"
          value={character.imagen_url}
          onChange={handleChange}
          required
        />

        <label htmlFor="disponible">Disponible:</label>
        <input
          type="checkbox"
          id="disponible"
          name="disponible"
          checked={character.disponible}
          onChange={() =>
            setCharacter(prevCharacter => ({
              ...prevCharacter,
              disponible: !prevCharacter.disponible,
            }))
          }
        />

        <button type="submit">Agregar Personaje</button>
      </form>
    </div>
  );
}

export default DragonBallForm;
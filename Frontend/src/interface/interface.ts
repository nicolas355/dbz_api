

export interface Character {
    nombre: string;
    especie: string;
    id:string;
    raza: string;
    ocupacion:string ;
    descripcion:string; 
    habilidades:string[] ;
    imagen_url:string;
    disponible: boolean; 
    
  }

  export interface DragonBallFormProps {
    onSubmit: (character: {
      nombre: string;
      especie: string;
      raza: string;
      ocupacion: string;
      descripcion: string;
      habilidades: string[]; // Cambiado a un arreglo de cadenas
      imagen_url: string;
      disponible: boolean;
    }) => void;
  }
  
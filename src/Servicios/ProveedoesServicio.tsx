import Axios from "axios";
import React, { useEffect, useState } from "react";

export const ProveedoesServicio = () => {
  const [list, setList] = useState<any[]>([]); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Axios({
      url: "http://scratchya.com.ar/react/datos.php",
    })
      .then((response) => {
        console.log("Respuesta completa de la API:", response.data); 
        setList(response.data); 
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
        setError("Error al cargar los datos de proveedores.");
      });
  }, []);

  return (
    <div>
      <h1>Lista de Proveedores</h1>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

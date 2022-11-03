import useClima from "../hooks/useClima";

const Formulario = () => {

    const {busqueda, datosBusqueda} = useClima();

     const {ciudad, pais} = busqueda;
  return (
    <>
      <div className="contenedor">
        <div className="campo">
        <label htmlFor="ciudad">Ciudad: </label>
        <input 
        type="text"
         id="ciudad" 
         name="ciudad" 
            onChange={datosBusqueda} 
            value={ciudad}
        />
        </div>

        <div className="campo">
          <label htmlFor="pais">pais: </label>
          <select id="pais"
            name="pais"
            onChange={datosBusqueda}
            value={pais}
          >
            <option value=""> Seleccione un país </option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
        </div>

        <input type="submit" value="Buscar Clima" className="btn btn-primario btn-block" />
      </div>
    </>
  );
}

export default Formulario
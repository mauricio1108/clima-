import {useState, createContext} from "react";  

const ClimaContext = createContext();

const ClimaProvaider = ({children}) => {
    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: "",
        error: false,
    });

    const datosBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <ClimaContext.Provider value={{busqueda, datosBusqueda}}>
            {children}
        </ClimaContext.Provider>
    )
}

export {ClimaContext, ClimaProvaider};

export default ClimaProvaider;
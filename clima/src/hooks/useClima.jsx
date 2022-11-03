import {useContext} from 'react';
import {ClimaContext} from '../context/ClimaProvaider';

const useClima = () => {
    return useContext(ClimaContext);
};

export default useClima;

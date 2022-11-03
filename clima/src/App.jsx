import Appclima from "./components/Appclima";
import {ClimaProvaider} from "./context/ClimaProvaider";


function app (){
    return(
        <ClimaProvaider>
            <header>
                <h1>busca el clima </h1>
            </header>
            <Appclima/>
        </ClimaProvaider>
        
        
       
    )

}

export default app;
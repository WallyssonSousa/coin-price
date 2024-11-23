import CriptoMoedaItem from './CriptomoedaItem';
import './Criptomoedas.css';
import Cripto from './Routes/Cripto';
import { Link } from 'react-router-dom';


const Criptomoedas = (props) => {
    return(
        <div className="container">
            <div>
                <div className="cabecalho">
                    <p>Rank</p>
                    <p className="nome-cripto">Criptomoeda</p>
                    <p>Preço</p>
                    <p>24h</p>
                </div>

                {props.criptomoedas.map(criptomoedas =>{
                    return(
                        <Link to={`/cripto/${criptomoedas.id}`} element={<Cripto />} key={criptomoedas.id}>
                            <CriptoMoedaItem criptomoedas={criptomoedas} />
                        </Link>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default Criptomoedas;
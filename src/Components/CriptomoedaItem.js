import React from "react";
import './Criptomoedas.css';

const CriptomoedaItem = (props) => {
    return(
        <div className="cripto">
            <p className="cripto-name">
                {props.criptomoedas.market_cap_rank}
            </p>
            <div className="img-simbolo">
                <img src={props.criptomoedas.image} className='position' />
                <p className='position'>{props.criptomoedas.symbol.toUpperCase()}</p>
            </div> 
            <p className='position'>${props.criptomoedas.current_price.toLocaleString()}</p> 
            <p className='position'>{props.criptomoedas.price_change_percentage_24h}%</p> 
            <p className='position'></p> 
        </div>
    )       
}

export default CriptomoedaItem;
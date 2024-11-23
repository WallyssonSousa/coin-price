import React, {useState, useEffect}from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Cripto.css';

const Cripto = () => {

    const params = useParams()
    const [cripto, setCripto] = useState({})
    
    const url = `https://api.coingecko.com/api/v3/coins/${params.criptomoedasId}`

    useEffect(()=>{
        axios.get(url).then((res) =>{
            setCripto(res.data)
        }).catch((error) => {
            console.log(error)
        }, [])
    })

    return(
       <div>
            <div className="cripto-container">
                <div className="container">
                    <h1>{cripto.name}</h1>
                </div>
                <div className="container">
                    <div className="rank">
                        <p className="rank-btn">Rank # {cripto.market_cap_rank}</p>
                    </div>
                    <div className="info">
                        <div className="cripto-image">
                            {cripto.image ? <img src={cripto.image.small} /> : null}
                            <p>{cripto.name}</p>
                            <p>{cripto.symbol}</p>
                        </div>
                        <div className="cripto-preco">
                            {cripto.market_data?.current_price ? <h1>${cripto.market_data.current_price.usd.toLocaleString()}</h1> : null}
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Cripto;
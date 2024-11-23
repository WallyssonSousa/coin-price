import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import logo from './Components/Assets/litecoin.png';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Criptomoedas from './Components/Criptomoedas';
import Cripto from './Components/Routes/Cripto';
import Login from './Components/Login';
import CriarConta from './Components/CriarConta';

export default function App(){
  const [criptomoedas, setCriptomoedas ] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false  '

  useEffect(() => {
    axios.get(url).then((response) => {
      setCriptomoedas(response.data)
      console.log(response.data)
    }).catch((error) =>{
      console.log(error)
    })
  }, [])

  return(
    <BrowserRouter>
      <header>
        <Link to={`/`}>
         <img src={logo} className="icon" />
        </Link>
        
        <h2>Análise Bitcoin</h2>
        <div>
          <Link to={`/login`} element={<Login />}>
            <p className='button-entrar'>Entrar</p>
          </Link>
          <Link to={`/criarConta`} element={<CriarConta />}>
            <p className='button-criar-conta'>Criar conta</p>
          </Link>
          
        </div>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Criptomoedas criptomoedas={criptomoedas}/>} />
          <Route path='/cripto' element={<Cripto />}>
            <Route path=':criptomoedasId' element={<Cripto /> } />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/criarConta' element={<CriarConta />} />
        </Routes>
        
      </main>
    </BrowserRouter>
  )
}
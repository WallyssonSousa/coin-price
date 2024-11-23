import React from "react";
import './CriarConta.css';

const CriarConta = () => {
    return(
        <div className="Container">
            <div className='Formulario-Criar'>
                <h1 className='title'>Criar Conta</h1>
                <input type='Campo-texto' className='Campo-Texto' placeholder='Email'/>
                <input type='Campo-texto' className='Campo-Texto' placeholder='Senha'/>
                <input type='Campo-texto' className='Campo-Texto' placeholder='Confirmar Senha'/>
                <button className='btn'>Criar</button>
            </div>
        </div>
    )
}

export default CriarConta;
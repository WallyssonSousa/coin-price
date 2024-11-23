import './Login.css';

const Login = () => {
    return(
        <div className='Container'>
            <div className='Formulario-Entrar'>
                <h1>Login</h1>
                <input type='Campo-texto' className='Campo-Texto' placeholder='Email'/>
                <input type='Campo-texto' className='Campo-Texto' placeholder='Senha'/>
                <button className='btn'>Login</button>
            </div>
        </div>
    )
}

export default Login;
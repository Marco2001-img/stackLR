import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
   
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', { name, password });
            setToken(response.data.token);
            console.log(response.data.token);
           // console.log(name)
            console.log('bienvenido')

            //const { role } = response.data
            
            if(name === 'admin')
            {
               // console.log('hola admin')
                navigate('/auth/admin-dashboard');
            }
            else if(name === 'cliente')
            {
                navigate('/auth/clientes');
            }
            else if(name === 'soporte')
            {
                navigate('/auth/soporte')
            }
        

        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
            } else if (error.request) {
                console.error('Error request:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
        }
    };

    return (
        <>
        <h1>Iniciar sesion</h1>
        <form onSubmit={handleSubmit}>

            <input 
            type="text" 
            name='name'
            placeholder="Usuario" 
            value={name} onChange={(e) => setName(e.target.value)} 
            />
            <input 
            type="password" 
            placeholder="Contraseña" 
            name='password'
            value={password} onChange={(e) => setPassword(e.target.value)} 
            />
            
            <button type="submit">Login</button>
        
        </form>

        <Link to="/auth/registro">¿No tienes cuenta? Registrate</Link><br />
        <Link to="/auth/olvidar">¿Olvidaste contraseñe?</Link>
        
        </>
    );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', { email, password });
            setToken(response.data.token);
            console.log(response.data.token);
            console.log('bienvenido')
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
            type="email" 
            name='email'
            placeholder="Email" 
            value={email} onChange={(e) => setEmail(e.target.value)} 
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

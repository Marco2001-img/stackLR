import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/register', { name, email, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
    <>
    <form onSubmit={handleSubmit}>
        <h1>Crear cuenta</h1>
        <input 
        type="text" 
        placeholder="Nombre" 
        name='name'
        value={name} onChange={(e) => setName(e.target.value)} 
        />
        <input 
        type="email" 
        name='email'
        placeholder="Email" 
        value={email} onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
        type="password" 
        name='password'
        placeholder="Contraseña" 
        value={password} onChange={(e) => setPassword(e.target.value)} 
        />
        <button 
        type="submit"
        >Register
        </button>
    </form>

    <Link to="/auth/login">¿Ya tienes cuenta? Inicia Sesion</Link>
    
    </>
    );
};

export default Register;

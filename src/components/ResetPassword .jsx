import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [token, setToken] = useState('');
    const query = useQuery();

    useEffect(() => {
        const token = query.get('token');
        const email = query.get('email');
        if (token && email) {
            setToken(token);
            setEmail(email);
        }
    }, [query]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/reset-password', {
                email,
                password,
                password_confirmation: passwordConfirmation,
                token,
            });
            console.log(response.data);
            // Manejar la respuesta
        } catch (error) {
            console.error(error);
            // Manejar el error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Email'
                name='email'
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='password'
                name='password'
            />
            <input
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
                placeholder='Repetir contraseña'
                name='password_confirmation'
            />
            <button type="submit">Restablecer contraseña</button><br />
            <a target="_blank" href="/auth/login">Volver</a>
        </form>
    );
};

export default ResetPassword;

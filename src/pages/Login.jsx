import React, { useContext, useState } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', true);
    }
    return (
        <div className='login'>
            <form onSubmit={login}>
                <MyInput
                    type="text"
                    placeholder='name'
                />
                <MyInput
                    type="password"
                    placeholder='password'
                />
                <MyButton type="submit">Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;
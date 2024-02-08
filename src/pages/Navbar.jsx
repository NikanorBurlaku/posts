import React, { useContext } from 'react';
import { AuthContext } from '../context';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <header>
            <nav className="navbar">
                <Link to='/about'>About</Link>
                <Link to='/posts'>Posts</Link>
            </nav>
            <button className='header__btn' onClick={logout}>Logout</button>
        </header>
    );
};

export default Navbar;
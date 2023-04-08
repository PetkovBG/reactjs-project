import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/authContext';
import { useContext } from 'react';

import styles from './Header.module.css'

export const Header = () => {

    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {isAuthenticated && (
                        <li>Welcome {userEmail}</li>
                    )}
                    <li><Link to="/catalog">Properties</Link></li>

                    {isAuthenticated && (
                        <>

                            <li><Link to="/create-property">Add Property</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </>
                    )}

                    {!isAuthenticated && (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}

                </ul>
            </nav>
        </header>

    );

}
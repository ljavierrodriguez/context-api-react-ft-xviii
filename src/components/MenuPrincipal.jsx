import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../store/AppContext'

export const MenuPrincipal = () => {
    const { store, actions } = useContext(AppContext);

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            {
                !!store.currentUser && (
                    <li className="nav-item">
                        <button className="nav-link" onClick={actions.salir}>Salir</button>
                    </li>
                )
            }

        </ul>
    )
}

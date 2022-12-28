import React, { useContext } from 'react'
import { AppContext } from '../store/AppContext';

export const Home = () => {
    const { store } = useContext(AppContext);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-danger">
                        {store?.mensaje}
                    </h1>
                </div>
            </div>
        </div>
    )
}

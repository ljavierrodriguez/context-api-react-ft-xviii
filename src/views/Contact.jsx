import React, { useContext, useEffect } from 'react'
import { AppContext } from '../store/AppContext';

export const Contact = () => {

    const { store, actions } = useContext(AppContext);
    //const { username, password } = store;

    useEffect(() => {
        actions.newMessage();
    }, [])

    return (
        <div className="container">
            <form onSubmit={(e) => actions.handleSubmit(e, { username: store.username, password: store.password })}>
                <div className="form-group mb-3">
                    <label htmlFor="username">Username:</label>
                    <input type="email" placeholder='john.doe@gmail.com' className="form-control" onChange={actions.handleChange} name="username" value={store.username} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Username:</label>
                    <input type="password" placeholder='************' className="form-control" onChange={actions.handleChange} name="password" value={store.password} />
                </div>
                <div className="d-grid mb-3">
                    <button className="btn btn-primary btn-sm gap-2">
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

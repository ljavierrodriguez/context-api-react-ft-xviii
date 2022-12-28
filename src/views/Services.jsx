import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../store/AppContext'

export const Services = () => {

    const { store, actions } = useContext(AppContext);

    const navigate = useNavigate();

    useEffect(() => {
        if(!store.currentUser) navigate('/contact')
    }, [store.currentUser])

  return (
    <div className="container">
        Services
    </div>
  )
}

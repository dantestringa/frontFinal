import { NavLink, Outlet } from 'react-router-dom';
import React from 'react'


const Layout = () => {
    return (
        <nav className="navbar">
            <NavLink 
                to='/'
                className={({isActive}) => (isActive ? 'link active' : 'link')}
            >
                Inicio
            </NavLink>
            <NavLink 
                to='/escuela'
                className={({isActive}) => (isActive ? 'link active' : 'link')}
            >
                Cursos teoricos
            </NavLink>
            <NavLink 
                to='/formulario'
                className={({isActive}) => (isActive ? 'link active' : 'link')}
            >
                Evento 2023
            </NavLink> 
            <NavLink 
                to='/lista'
                className={({isActive}) => (isActive ? 'link active' : 'link')}
            >
                Lista de Inscriptos al Evento
            </NavLink>
            <Outlet />
            
        </nav>
    )
}

export default Layout
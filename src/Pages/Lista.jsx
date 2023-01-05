import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { NavLink, Outlet } from 'react-router-dom';


const Lista = () => {
        
    const [datos, setDatos] = useState([]);

    //api de mi data
    //const URL = 'http://localhost:3001/datos';//variable local

    const URL = 'https://backfinal-production-30ee.up.railway.app/datos'; //variable producción

    //Creamos una función para el useEffect
    const getPersonas = async () => {
        try {
            const { data } = await axios.get(URL);
            setDatos(data.datos)
            console.log(data.datos);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPersonas()
    },[]);
    
        return (
        <div className='section'>

            <div className='text-center'>
                <h1>
                   Lista de Participantes al Evento Nacional
                </h1>
                <h4>
                    En esta lista se encuentran todas las personas y aeronaves inscriptas para el evento a realizarse el 14/02/2023
                </h4>
                <NavLink
                to='/formulario'
                className={({isActive}) => (isActive ? 'link active' : 'link')}>
                Click aqui para inscribirse
                </NavLink> <Outlet />
                <br />
                <span>
                    Si usted completo el formulario de inscripcion y no se encuentra en la lista comunicarse al 11-0000-0000
                </span>
            </div>

            <Table striped bordered hover className='m-5'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Tipo</th>
                        <th>Matricula</th>
                    </tr>
                </thead>
                <tbody>
                {datos.map(dato => 
                    <tr>
                        <td>{dato._id}</td>
                        <td>{dato.nombre}</td>
                        <td>{dato.apellido}</td>
                        <td>{dato.dni}</td>
                        <td>{dato.tipo}</td>
                        <td>{dato.matricula}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}

export default Lista
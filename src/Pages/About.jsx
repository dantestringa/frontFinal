import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';


const About = () => {

  const [datos, setDatos] = useState([])

  //Api de mi database
  //const URL = 'http://localhost:3001/datos'

  const URL = 'https://backfinal-production-30ee.up.railway.app/datos'

  //Creamos una funcion para useEffect
  const getPersonas = async () => {
    try {
      const { data } = await axios.get(URL)
      setDatos(data.datos)
      console.log(data.datos);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getPersonas()
  }, [])


  return (
    <div className='section'>
      <h2>
        About Page
      </h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
          </tr>
        </thead>
        <tbody>
        {datos.map(dato => 
          <tr>
            <td>{dato._id}</td>
            <td>{dato.nombre}</td>
            <td>{dato.apellido}</td>
            <td>{dato.dni}</td>
          </tr>
        )}
        </tbody>
      </Table>

    </div>
  )
}

export default About
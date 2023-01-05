import React from 'react'
import Card from 'react-bootstrap/Card';

const Escuela = () => {
  return (
    <div className='section'>
        
      <div className='text-center'>
        <h1>Cursos Lectivos 2023</h1>
        <span>Para consultar sobre fechas y requisitos para los cursos lectivos que ofrece nuestra institución comunicarse al 11-0000-0000 </span>
      </div>

      <hr />

      <div className="row my-3 justify-content-evenly">
        <Card style={{ width: '20rem', height: '23rem' }}>
          <Card.Img variant="top" src='https://www.centrouniversitariodeaviacion.com.ar/uploads/900x900PRIVADO.jpg' height="250" className='my-2 rounded'/>
          <Card.Body className='text-center'>
            <Card.Title>Piloto Privado de Avion</Card.Title>
            <Card.Text>
              VHF Controlado
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem', height: '23rem' }}>
          <Card.Img variant="top" src='https://www.centrouniversitariodeaviacion.com.ar/uploads/900x900comercial.jpg' height="250" className='my-2 rounded'/>
          <Card.Body className='text-center'>
            <Card.Title>Piloto Comercial</Card.Title>
            <Card.Text>
              Con HVI
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem', height: '23rem' }}>
          <Card.Img variant="top" src='https://www.centrouniversitariodeaviacion.com.ar/uploads/instructor2.jpg' height="250" className='my-2 rounded'/>
          <Card.Body className='text-center'>
            <Card.Title>Instructor de Vuelo</Card.Title>
            <Card.Text>
              Curso teorico y practico
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

    </div>
  )
}

export default Escuela
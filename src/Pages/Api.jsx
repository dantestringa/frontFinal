import React from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
import Tarjetas from '../Componentes/Tarjetas'

const Api = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(res => setCharacters(res.results))
  },[])

  const handleImprimir = () => {
    console.log('Buenas tardes, soy la funcion');
    console.log(characters);
  }

  return (
    <div className='section m-5'>
      <hr />
      <h2>
        Api Page
      </h2>
      <hr />

      <div className='text-center m-4'>
        <Button onClick={handleImprimir} variant="w-50 m-2 danger">
          Imprimir los datos en la Consola
        </Button>
      </div>

      <div>
        <Row>
          {characters.map((c) => (
            <Col key={c.id}>
              <Tarjetas characters={c} />
            </Col>
            ))}
        </Row>
      </div>
    </div>
  )
}

export default Api
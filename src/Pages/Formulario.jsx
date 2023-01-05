import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

const Formulario = () => {

  //API de la database
  //const URL = 'http://localhost:3001/crear'

  const URL = 'https://backfinal-production-30ee.up.railway.app/crear'


  //Inicializamos variables para useState
  const [inputs, setInputs] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    tipo: "",
    matricula: ""
  })

  //Funcion para setear las variables
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  //Funcion del post
  const handleClick = async () => {
    await axios.post(URL, inputs)
    setInputs({
      nombre: "",
      apellido: "",
      dni: "",
      tipo: "",
      matricula: ""
    })
  }

  return (
    <div className='section'>
      
      <div className='text-center'>
        <h1>
          Evento Nacional 14/02/2023
        </h1>
        <h4>
          Pasadas aereas, aterrizajes de precision, vuelo en formacion y mucho mas!
        </h4>
        <span>
          Si usted quiere participar de dicho evento, es obligatoriamente requerido completar el siguiente formulario con los datos correctos. <br /> Para mas informacion comunicarse al 11-0000-0000
        </span>
      </div>

        {Object.keys(inputs).map((key, index) => (
          <Form.Group className="mb-3" key={index}>
            <Form.Label id="form">
              {key}
            </Form.Label>
            <Form.Control
              name={key}
              value={inputs[key]}
              onChange={handleChange}
              required
            />
          </Form.Group>
        ))}

        <div className="text-center">
          <Button variant="primary" type="submit" onClick={handleClick}>
            Enviar Datos
          </Button>
        </div>

    </div>
  )
}

export default Formulario
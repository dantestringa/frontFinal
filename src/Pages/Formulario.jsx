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
    dni: ""
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
      dni: ""
    })
  }

  return (
    <div className='section m-5'>
      <h2>
        Formulario Page
      </h2>
      <Form>
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

        <div className="text-center w-50">
          <Button variant="primary" type="submit" onClick={handleClick}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Formulario
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IMG_1 from '../images/IMG_1.jpg'
import IMG_2 from '../images/IMG_2.jpg'
import IMG_7597 from '../images/IMG_7597.jpg'
import IMG_7600 from '../images/IMG_7600.jpg'
import IMG_7630 from '../images/IMG_7630.jpg'
import IMG_7643 from '../images/IMG_7643.jpg'


const Home = () => {
  return (
    
    <div className='section'>
      <Carousel fade className='text-center m-3'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent.fepa8-1.fna.fbcdn.net/v/t39.30808-6/278599051_3249791585250806_178499740961604543_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=2o-DwAMjwFMAX_z2rBN&_nc_ht=scontent.fepa8-1.fna&oh=00_AfAVSPLlZ92l3ad1RjTrD8_-nwOcEsPMVTul-J49vlDU4Q&oe=63BC68BF"
            alt="LOGO" height={600}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.centrouniversitariodeaviacion.com.ar/uploads/piper285.jpg"
            alt="PIPER PA-28" height={600}
          />
          <Carousel.Caption>
            <h3>PIPER PA-28</h3>
            <h7>LV-MHX y LV-AXH</h7>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.centrouniversitariodeaviacion.com.ar/uploads/gallery_img-02.jpg"
            alt="PIPER PA-11" height={600}
          />
          <Carousel.Caption>
            <h3>PIPER PA-11</h3>
            <h7>LV-NTY y LV-XTD</h7>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.centrouniversitariodeaviacion.com.ar/uploads/tecnam1.jpg"
            alt="TECNAM P92 ECHO" height={600}
          />
          <Carousel.Caption>
            <h3>TECNAM P92 ECHO</h3>
            <h7>LV-S042</h7>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.centrouniversitariodeaviacion.com.ar/uploads/petrel2.jpg"
            alt="PETREL" height={600}
          />
          <Carousel.Caption>
            <h3>PETREL</h3>
            <h7>LV-FVB</h7>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.centrouniversitariodeaviacion.com.ar/uploads/cessna2.jpg"
            alt="C-150" height={600}
          />
          <Carousel.Caption>
            <h3>C-150</h3>
            <h7>LV-JIF, LV-CHE, LV-CQU y LV-LGF</h7>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <hr />

      <div className="row my-3 justify-content-evenly">
        <Card style={{ width: '20rem', height: '21rem' }}>
          <Card.Img variant="top" src={IMG_7597} height="250" className='my-2 rounded'/>
          <Card.Body>
            <Card.Text className='text-center'>
              Junta tus horas de vuelo en el CUA
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem', height: '21rem' }}>
          <Card.Img variant="top" src={IMG_7630} height="250" className='my-2 rounded'/>
          <Card.Body>
          <div className='text-center'>
            <Button variant="primary" href='https://www.instagram.com/cua_argentina/'>
            Seguinos en Instagram
            </Button>
          </div>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem', height: '21rem' }}>
          <Card.Img variant="top" src={IMG_7600} height="250" className='my-2 rounded'/>
          <Card.Body>
            <Card.Text className='text-center'>
              Aviones en perfeecto estado
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem', height: '21rem' }}>
          <Card.Img variant="top" src={IMG_7643} height="250" className='my-2 rounded'/>
          <Card.Body>
            <Card.Text className='text-center'>
              Cenas de camaraderia y sociales
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem', height: '21rem' }}>
          <Card.Img variant="top" src={IMG_1} height="250" className='my-2 rounded'/>
          <Card.Body>
            <Card.Text className='text-center'>
              Clases de simulador terrestre
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '20rem', height: '21rem' }}>
          <Card.Img variant="top" src={IMG_2} height="250" className='my-2 rounded'/>
          <Card.Body>
            <Card.Text className='text-center'>
              Constantes charlas educativas
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Home
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from './Pages/Error'
import Home from './Pages/Home'
import Lista from './Pages/Lista'
import Formulario from "./Pages/Formulario";
import Escuela from "./Pages/Escuela";
import Layout from "./Componentes/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/lista' element={<Lista />} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='/escuela' element={<Escuela />} />
          <Route path='*' errorElement={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

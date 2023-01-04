import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from './Pages/Error'
import Home from './Pages/Home'
import About from './Pages/About'
import Api from "./Pages/Api";
import Productos from "./Pages/Productos";
import Formulario from "./Pages/Formulario";
import Otro from "./Pages/Otro";
import Layout from "./Componentes/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/api' element={<Api />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='/otro' element={<Otro />} />
          <Route path='*' errorElement={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

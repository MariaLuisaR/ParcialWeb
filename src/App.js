import { Routes, Route } from 'react-router-dom';
import Robots from './componentes/robots';  
import InicioSesion from './componentes/iniciosesion';  

function App() {
  return (
    <div>
      <Routes>
        <Route path="/robots" element={<Robots />} />
        <Route path="" element={<InicioSesion />} />
      </Routes>
    </div>
  );
}

export default App;

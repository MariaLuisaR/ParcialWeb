import { Routes, Route } from 'react-router-dom';
import Robots from './componentes/robots';  // Asegúrate de importar el componente Robots
import InicioSesion from './componentes/iniciosesion';  // Importa InicioSesion
import Detail from './componentes/detail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/robots" element={<Robots />} />
        <Route path="" element={<InicioSesion />} />
        <Route path="/robots/:robotId" element={<Detail />} /> 
      </Routes>
    </div>
  );
}

export default App;

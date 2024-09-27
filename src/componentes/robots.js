import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function Robots() {
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null); // Estado para el robot seleccionado

  useEffect(() => {
    const URL = "http://localhost:3001/robots";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setRobots(data);
      });
  }, []);

  const handleRowClick = (robot) => {
    setSelectedRobot(robot); 
  };

  return (
    <div className="container">
      <h2 className="mt-2">Listado de robots</h2>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Empresa Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr key={robot.id} onClick={() => handleRowClick(robot)} style={{ cursor: "pointer" }}>
              <td>{robot.id}</td>
              <td>{robot.nombre}</td>
              <td>{robot.modelo}</td>
              <td>{robot.empresaFabricante}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedRobot && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3>Detalles del Robot</h3>
          <p><strong>ID:</strong> {selectedRobot.id}</p>
          <p><strong>Nombre:</strong> {selectedRobot.nombre}</p>
          <p><strong>Modelo:</strong> {selectedRobot.modelo}</p>
          <p><strong>Empresa Fabricante:</strong> {selectedRobot.empresaFabricante}</p>
        </div>
      )}
    </div>
  );
}

export default Robots;

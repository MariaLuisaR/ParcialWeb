import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl"; 
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";  

function Robots() {
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null); 

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
      <hr />
      <Row>
        <Col md={8}>
          <Table>
            <thead className="table-dark">
              <tr>
                <th><FormattedMessage id="table.id" /></th>
                <th><FormattedMessage id="table.name" /></th>
                <th><FormattedMessage id="table.model" /></th>
                <th><FormattedMessage id="table.manufacturer" /></th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr
                  key={robot.id}
                  onClick={() => handleRowClick(robot)}
                  style={{ cursor: "pointer" }}
                >
                  <td><b>{robot.id}</b></td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={4}>
          {selectedRobot ? (
            <Card style={{ width: '100%', border: '1px solid #979797', textAlign: 'center', backgroundColor: '#EBEBEA'}}> 
              <Card.Body>
                <Card.Title><b>{selectedRobot.nombre}</b></Card.Title>
                <Card.Img 
                  variant="top" 
                  src={selectedRobot.imagen.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/')} 
                  alt={selectedRobot.nombre} 
                  style={{ 
                    width: "150px", 
                    height: "150px", 
                    objectFit: "cover", 
                    margin: "0 auto", 
                    border: '1px solid #979797' 
                  }}  
                />
                <Card.Text style={{ textAlign: "left", marginTop: '10px' }}>
                  <b>➔ <FormattedMessage id="robotDetails.year" />:</b> {selectedRobot.añoFabricacion} <br/>
                  <b>➔ <FormattedMessage id="robotDetails.processingPower" />:</b> {selectedRobot.capacidadProcesamiento} <br/>
                  <b>➔ <FormattedMessage id="robotDetails.humor" />:</b> {selectedRobot.humor}
                </Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <div style={{ textAlign: "left" }}>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Robots;

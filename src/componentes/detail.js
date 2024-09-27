import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Robot from "./robot";
import Robots from "./robots";
import { useEffect, useState } from "react";


export default function Detail() {
  const { robotId } = useParams();
  const [robot, setRobot] = useState(null);

  useEffect(() => {
    const URL =
      "http://localhost:3001/robots";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        const foundRobot = data.find((masc) => masc.id === parseInt(robotId));
        setRobot(foundRobot);
      });
  }, [robotId]);

  if (!robot) {
    return;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{robot.nombre}</h1>
      <h3>{robot.modelo}</h3>
    </div>
  );
}



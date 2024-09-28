import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function InicioSesion() {
  const [formValues, setFormValues] = useState({ username: "", contrasena: "" });
  const [validationStates, setValidationStates] = useState({ usernameState: true, contrasenaState: true });
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setFormValues({ ...formValues, username: e.target.value });
  };

  const handleContrasenaChange = (e) => {
    setFormValues({ ...formValues, contrasena: e.target.value });
  };

  const clickSubmit = () => {
    const valUsername = formValues.username === 'user';
    const valContrasena = formValues.contrasena === '12345';

    setValidationStates({ usernameState: valUsername, contrasenaState: valContrasena });

    if (valUsername && valContrasena) {
      navigate('/robots');
    }
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <h4 className="text-center" style={{ fontWeight: "bold", marginBottom: "20px", fontSize: "1.8rem" }}>Inicio de sesión</h4>
          <Form>

            <Form.Group className="mb-4" controlId="formBasicUsername">
              <Form.Label style={{ fontWeight: "bold" }}>Nombre de usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de usuario"
                onChange={handleUsernameChange}
                value={formValues.username}
                isInvalid={!validationStates.usernameState}
                style={{ height: "50px", fontSize: "1.2rem", backgroundColor: "#e0e0e0" }} 
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicContrasena">
              <Form.Label style={{ fontWeight: "bold" }}>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                onChange={handleContrasenaChange}
                value={formValues.contrasena}
                isInvalid={!validationStates.contrasenaState}
                style={{ height: "50px", fontSize: "1.2rem", backgroundColor: "#e0e0e0" }} 
              />
            </Form.Group>

            <Row className="justify-content-center">
              <Col xs="auto">
                <Button 
                  variant="primary" 
                  onClick={clickSubmit}
                  style={{ width: "255px", height: "50px", fontSize: "1.2rem", backgroundColor: "#0047AB" }} 
                >
                  <b>Ingresar</b>
                </Button>
              </Col>
              <Col xs="auto">
                <Button 
                  variant="danger" 
                  style={{ width: "255px", height: "50px", fontSize: "1.2rem", backgroundColor: "#E63946", color: "black" }} 
                >
                  <b>Cancelar</b>
                </Button>
              </Col>
            </Row>
          </Form>

          <Row style={{ marginTop: "20px" }}>
            <Col xs="auto">
              {(!validationStates.usernameState || !validationStates.contrasenaState)
                && <Form.Text style={{ color: "#DC3545", fontWeight: "bold", fontSize: "1rem" }}>
                  Error de autenticación. Revise sus credenciales
                </Form.Text>}
            </Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default InicioSesion;

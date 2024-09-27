import { useNavigate } from 'react-router-dom';
import { Container, Row, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

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
    <Container>
      <Row>
        <h2>Inicio de sesión</h2>
      </Row>
      <Form>
        <Form.Group className="mb-6" controlId="formBasicUsername">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            onChange={handleUsernameChange}
            value={formValues.username}
            isInvalid={!validationStates.usernameState}
          />
          {!validationStates.usernameState && <Form.Text className="text-muted">Debe contener un '@'.</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContrasena">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={handleContrasenaChange}
            value={formValues.contrasena}
            isInvalid={!validationStates.contrasenaState}
          />
          {!validationStates.contrasenaState && (
            <Form.Text className="text-muted">Debe tener al menos 9 caracteres.</Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
          Ingresar
        </Button>
      </Form>
    </Container>
  );
}

export default InicioSesion;

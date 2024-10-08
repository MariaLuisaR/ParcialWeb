import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es"; // Español
import localeEnMessages from "./locales/en"; // Inglés

const messages = {
  es: localeEsMessages,
  en: localeEnMessages,
};

const language = navigator.language.split(/[-_]/)[0]; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <Container>
          <Row>
            <h2 className="text-center" style={{ marginBottom: "30px", marginTop: "20px" }}>
              <b>Adopta un Robot con Robot Lovers!</b>
            </h2>
          </Row>
          <Row className="justify-content-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fw2jUle4ph-OvQCKCgeXE13cL8eqF0~x46PB5Ex9ZeGitifxGVpHkmgVWrSyoX40yf8kDFyDG0kCOsznQzvCm0ZRb6XBZa5wBkuSP72z2zVgbM0VRQF2LisfTuqH6zBQ6XxW2mHLr-SJ9YKwtG5qeZgWHU-63kWUHQ2WAdjoQYOQmQQbnCwb9ovR4qWeOQ4YSFoDkr7P-oiW~T9vjfymu8J6k0Wjfs8eWsu77z63tgntK~UEcReqX5fDEJ2LokvINxIvxXv~xUNNQUH0785O-R0R2AbNVDsjfwFCG1b-C-oNuHCsY88sNBPUEr6TLV39DYSEGU4TZrzYQK-FCQ82oQ__"
              alt="foto robots"
              style={{
                width: "900px",
                height: "270px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </Row>
          <App />
          <Row>
            <p className="text-center" style={{ marginTop: "60px" }}>
              Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
            </p>
          </Row>
        </Container>
      </Router>
    </IntlProvider>
  </React.StrictMode>
);

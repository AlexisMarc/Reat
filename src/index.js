import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
// import App from './Componentes/App';
import Aside from './Componentes/Aside/Aside';
import Feature from './Componentes/feature/Feature';
import Nav from './Componentes/nav/Nav';
import Text from './Componentes/text/Text';
import reportWebVitals from './reportWebVitals';
import "https://kit.fontawesome.com/6131ecdde6.js";
import Ubicanos from './Componentes/Ubicanos/Ubicanos';
import Footer from './Componentes/footer/Footer';
import Opinion from './Componentes/opinion/Opinion';
import Login from './Componentes/Login/Login';
import Dashboard from './Componentes/Dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Nav />
    <Aside />
    <section>
      <Text />
      <Feature />
      <Ubicanos />
    </section>
    <Opinion />
    <Footer /> 
    <Login />*/}
    <Dashboard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

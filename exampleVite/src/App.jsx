import './App.css';
import logo from './assets/react.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


/*

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';

<Button variant="secondary">Secondary</Button>


  const productos=[
        {codigo:1,descripcion:"Laptop HP", precio:11999},
        {codigo:2,descripcion:"Apple Macbook Air", precio:18599},
        {codigo:3,descripcion:"Pantalla Tcl", precio:7999},
        {codigo:4,descripcion:"Cámara Seguridad", precio:411},
        {codigo:5,descripcion:"Licuadora", precio:1799},
        {codigo:6,descripcion:"Silla Gamer", precio:1499},
  ];

Header:
background-color:#2b2728;

Banner:
background-color:#3c3c3c;

Body:
background-color:#ffffff14;

*/

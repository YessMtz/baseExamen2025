import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function App() {
const [productos, setProductos] = useState([
    {codigo:1, descripcion:"Laptop HP", precio:11999},
    {codigo:2, descripcion:"Apple Macbook Air", precio:18599},
    {codigo:3, descripcion:"Pantalla Tcl", precio:7999},
    {codigo:4, descripcion:"Cámara Seguridad", precio:411},
    {codigo:5, descripcion:"Licuadora", precio:1799},
    {codigo:6, descripcion:"Silla Gamer", precio:1499}
  ]);

            const[carrito,setCarrito]=useState([]);

            const Agregar= (p) =>{
              setCarrito([...carrito, p]);
            }
            const Eliminar= (p) =>{
              const temporal = carrito.filter((pt, it, ot) => it=>it!==i);
  return (
    <div className="App">
      <header className="App-header">
          </header>

          {
          productos.map((p,i,o) =>
          <h3>{p.codigo}</h3>)
          }

          
          <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {productos.map((p,i,o)=>
        <tr>
          <td>{p.codigo}</td>
          <td>{p.descripcion}</td>
          <td>{p.precio}</td>
          <td><Button onClick={()=>Agregar(p)} variant="secondary">+</Button></td>
        </tr>
        )
        }
        <tr>
          
        </tr>
      </tbody>
    </Table>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {productos.map((p,i,o)=>
        <tr>
          <td>{p.codigo}</td>
          <td>{p.descripcion}</td>
          <td>{p.precio}</td>
          <td><Button onClick={()=>Eliminar(p)} variant="secondary">-</Button></td>
        </tr>
        )
        }
        <tr>
          
        </tr>
      </tbody>
    </Table>


    
          
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

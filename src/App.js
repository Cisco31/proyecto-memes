import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value);
  }

  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value);
  }

  const onChangeImagen = function(evento){
    setImagen(evento.target.value);
  }

  const onclickExportar = function(evento){
    alert("Exportar");
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="bob_esponja">Bob Esponja</option>
        <option value="bob">Bob</option>
        <option value="homero">Homero</option>
        <option value="negro">Negro</option>
        <option value="golpeandome">Golpeandome</option>
        <option value="pikachu">Pikachu</option>
        <option value="puerco">Puerco</option>
        <option value="sid">Sid</option>
        <option value="son_expertos">Son expertos</option>
        <option value="sabatico">Sabatico</option>
      </select><br/>
      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/> <br/>
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/> <br/>
      <button onClick={onclickExportar}>Exportar</button>

      <div className='meme' id="meme">
        <span>{linea1}</span><br/>
        <span>{linea2}</span>
        
        
        <img src={"/img/" + imagen + ".jpg"} />
      </div>

    </div>
  );
}

export default App;

import React from 'react';
//import ReactDom from "react-dom";
import ParticleField from "react-particles-webgl";
//import logo from './logo.svg';
import './App.css';

function App() {
const config ={
  showCube:false,
  dimension: "3D",
  velocity:3,
  boundaryType:"bounce",
  antialias:true,
  direction: {
    xMin:-1,
    xMax: 1,
    yMin:-1,
    yMax:1,
    zMin:-1,
    zMax:1
  },
  lines:{
    colorMode:"solid",
    color: "#3FB568",
    transparency: 0.9,
    limitConnections:true,
    maxConnectios:20,
    minDistance:60,
    visible:true
  },
  particles: {
    colorMode: "solid",
    color: "#3FB568",
    transparency: 0.9,
      shape: "circle",
      boundingBox: "canvas",
      count: 300,
      minSize: 20,
    maxSize:50,
    visible:true
  },
  
  cameraControls:{
    enabled:false,
    enabledDamping:true,
    dampingFactor:0.2,
    enableZoom:true,
    autoRotate:false,
    autoRotateSpeed:0.3,
    resetCameraFlag:true
  }

}

  return (
    <div className="App">
    <input placeholder="Administrador de Datos"/>
    <button>Iniciar</button>
    <ParticleField config={config}/>
    </div>
  );
}

export default App;

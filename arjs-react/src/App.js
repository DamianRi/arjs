import React from 'react';
import './App.css';

class Box extends React.Component{

  constructor(props){
      super(props);
  }
  render(){
      return (
      <a-box 
      position={this.props.pos} 
      color={this.props.color}>
      </a-box>
      );
  }
}

function Plane(props) {
  return(
      <a-plane 
      id={props.name}
      position={props.pos} 
      rotation={props.rot} 
      scale={props.scale} 
      color={props.color}>

      </a-plane>
  );
}

function Sky(props) {
  return(
    <a-sky color={props.color}></a-sky>
  );
}

function Entity(props) {
  return(
    <a-entity gltf-model={"url("+props.path+")"} position={props.pos}></a-entity>
  );
}

/*
*  Generación del formato para la posición de las entidades
* con valores de diferentes coordinadas
*/
function formatPos(x,y,z) {
  return x+" "+y+" "+z;
}

function App() {
  let x = 2;
  let y = 2;
  let z = 5;

  return (
    <a-scene>
      
      <a-text position={formatPos(-x,y,-(z-.75))} 
        align="center" 
        rotation="0 0 0" 
        value="Hello W" 
        color="white"></a-text>
      <a-box  position="-2 1 -3" color="yellow"></a-box>

      <Box pos={formatPos(-x,y,-z)} color="rgb(100, 10, 10)"></Box>
      <Box pos="2 2 -5" color="rgb(0 , 50, 100)"></Box>

      <a-entity gltf-model="url(models/mono.gltf)" position={formatPos(-2,2,-3)} scale="10 10 10" ></a-entity>
      <Entity path="models/modo.gltf" pos={formatPos(-x,1,5)}></Entity>

      <Sky color="#fcd7a0"></Sky>
      <Plane id="Plano01" pos="0 0 0" rot="-90 0 0" scale="10 10 10" color="#b1b7d1"></Plane>
    </a-scene>
  );
}

export default App;

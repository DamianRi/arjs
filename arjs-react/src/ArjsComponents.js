import React from 'react';

class Box extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return (
        <a-box position={this.props.pos} 
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

class Scene extends React.Component{
    render(){
        return(
            <a-scene></a-scene>
        );
    }
}
/*
function Scene(props) {
    return(
        <a-scene></a-scene>
        );
    }
*/

/*
const domContainer = document.querySelector('#root');
ReactDOM.render(<Scene/>, domContainer);
*/
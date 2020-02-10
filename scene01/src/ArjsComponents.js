
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


function Scene(props) {
    return(
        <a-scene>

            <Box 
            color="red" 
            pos="-5 2 -5"></Box>
            
            <Plane 
            name="Plano1"
            pos="0 0 -5" 
            rot="-90 0 0" 
            scale="10 10 10" 
            color="gray" ></Plane>
        
        </a-scene>
    );
}


const domContainer = document.querySelector('#root');
ReactDOM.render(<Scene/>, domContainer);
/*
*/
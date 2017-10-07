import React, {Component} from 'react';
import Paper from 'material-ui/Paper';

const styleSheet = {
	leftPanel:{
        border: '2px solid black',
        width: '20%',
        height: '90.5%',
        display: 'inline-block',
        position: 'absolute',
        left: '0',
        overflow: 'auto'
	},
	rightPanel: {
        position: 'relative',
        border: '2px solid red',
        display: 'block',
        left: '20.5%',
        width: '79%'
    },
    circle: {
        '@media (minWidth: 500px)':{
            width: 20,
            height: 20,
        },
        height: 100,
        width: 100,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
    }
}



export default class Experience extends Component {
    render(){
        return (
            <div>
                <div style={styleSheet.leftPanel}>
                    <Paper style={styleSheet.circle} zDepth={1} circle={true} />
                    <Paper style={styleSheet.circle} zDepth={1} circle={true} />
                    <Paper style={styleSheet.circle} zDepth={1} circle={true} />
                    <Paper style={styleSheet.circle} zDepth={1} circle={true} />
                </div>
                <div style={styleSheet.rightPanel}>Right</div>
            </div>
        );
    }
}
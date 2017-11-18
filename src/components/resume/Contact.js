import React, {Component} from 'react';
import { Paper } from 'material-ui';

const styleSheet = {
    circle: {
        height: 50,
        width: 50,
        // marginTop: '50%',
        textAlign: 'center',
        overflow:'hidden',
        display: 'inline-block',
        verticalAlign: 'middle',
        cursor:'pointer',
        margin: '10px'
    },
    bubbleStyle: {
        width:"100%",height:"auto"
    }
}

export default class Experience extends Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{marginTop:'15%'}}>
                <Paper style={styleSheet.circle}
                    zDepth={1}
                    circle={true}
                >
                    <a href="mailto:coreyckepple@gmail.com">
                        <img src="/static/images/email.png" style={styleSheet.bubbleStyle}/>
                    </a>
                </Paper>
                <Paper style={styleSheet.circle}
                    zDepth={1}
                    circle={true}
                >
                    <a href="https://linkedin.com/in/cckepple" target="_blank">
                        <img src="/static/images/linkedin.png" style={styleSheet.bubbleStyle}/>
                    </a>
                </Paper>
                <Paper style={styleSheet.circle}
                    zDepth={1}
                    circle={true}
                >
                    <a href="https://www.facebook.com/corey.kepple" target="_blank">
                        <img src="/static/images/fb.png" style={styleSheet.bubbleStyle}/>
                    </a>
                </Paper>
                <h4>
                    I can be contacted through any of the above links.
                </h4>
            </div>
        )
    }
}
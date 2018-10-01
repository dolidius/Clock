import React, { Component } from 'react'

class Clock extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            secondStyle: {transform: `rotate(${180 + (6 *(new Date().getSeconds()))}deg)`},
            seconds: new Date().getSeconds(),
            hourStyle: {transform: `rotate(${180 + (0.0083333 * (new Date().getSeconds() + (new Date().getMinutes() * 60) + (new Date().getHours() * 3600) ) )}deg)`},
            hoursInSecs: new Date().getSeconds() + (new Date().getMinutes() * 60) + (new Date().getHours() * 3600),
            minStyle: {transform: `rotate(${ 180 + ( 0.1 * (new Date().getSeconds() + (new Date().getMinutes() * 60)) ) }deg`},
            minutesInSecs: new Date().getSeconds() + (new Date().getMinutes() * 60)
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState(perviousState => ({
            date: new Date(),
            secondStyle: {transform: `rotate(${180 + (6 *(perviousState.seconds + 1))}deg`},
            minStyle: {transform: `rotate(${ 180 + (0.1 * (perviousState.minutesInSecs + 1)) }deg`},   
            hourStyle: {transform: `rotate(${180 + (0.0083333 * (perviousState.hoursInSecs + 1 ) )}deg)`},         
            seconds: new Date().getSeconds(),
            minutesInSecs: new Date().getSeconds() + (new Date().getMinutes() * 60),
            hoursInSecs: new Date().getSeconds() + (new Date().getMinutes() * 60) + (new Date().getHours() * 3600),
        }));
                
    }
    
    render() {
        return (
            <div className="clock">

                <div className="hour top"></div>
                <div className="hour right"></div>
                <div className="hour bottom"></div>
                <div className="hour left"></div>

                <div className="dot"></div>

                <div style={this.state.hourStyle} className="hand hour-hand"></div>
			    <div style={this.state.minStyle} className="hand min-hand"></div>
			    <div style={this.state.secondStyle} className="hand second-hand"></div>

            </div>
        )
    }
}

export default Clock;
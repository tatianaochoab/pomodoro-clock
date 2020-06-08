import React, { Component } from 'react';
import ControlOne from './Control1';
import ControlTwo from './Control2';
import Timer from './Timer'


var timerPomodoro = null;


class Pomodoro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timer: '25:00',
            play: false,
            display: 'session'
        }
    }

    controlReset = () => {
        let audio = document.getElementById('beep');
        audio.currentTime = 0;
        audio.pause();
        this.setState({
            breakLength: 5,
            sessionLength: 25,
            timer: '25:00',
            play: false,
            display: 'session'
        })
        clearInterval(timerPomodoro);
        timerPomodoro = null;
    }

    breakDecrement = (e) => {
        if (!this.state.play) {
            let newBreakLength = this.state.breakLength - 1;
            if (this.state.breakLength > 1) {
                this.setState({
                    breakLength: newBreakLength
                });
            }
        }

    }
    breakIncrement = (e) => {
        if (!this.state.play) {
            let newBreakLength = this.state.breakLength + 1;
            if (this.state.breakLength < 60) {
                this.setState({
                    breakLength: newBreakLength
                });
            }
        }
    }

    sessionDecrement = (e) => {
        if (!this.state.play) {
            let newSessionLength = this.state.sessionLength - 1;
            if (this.state.sessionLength > 1) {
                this.setState({
                    sessionLength: newSessionLength,
                    timer: this.convertTimer(newSessionLength, 0)
                });
            }
        }
    }

    sessionIncrement = (e) => {
        if (!this.state.play) {
            let newSessionLength = this.state.sessionLength + 1;
            if (this.state.sessionLength < 60) {
                this.setState({
                    sessionLength: newSessionLength,
                    timer: this.convertTimer(newSessionLength, 0)
                });
            }
        }
    }

    startStop = (e) => {
        let newStartStop = !this.state.play
        this.setState({
            play: newStartStop
        });
        if (timerPomodoro === null) {
            this.playTimer();
        }
    }

    playTimer = () => {
        timerPomodoro = setInterval(
            () => {
                if (this.state.play) {
                    this.changeSession();
                }
            },
            1000
        );
    }

    convertTimer = (min, seg) => {
        let resultado;
        if (seg < 10) {
            seg = '0' + seg
        } if (min < 10) {
            min = '0' + min
        }
        resultado = min + ':' + seg;
        return resultado;
    }

    changeSession = () => {
        let arrayTimer = this.state.timer.split(':');
        let min = parseInt(arrayTimer[0]);
        let seg = parseInt(arrayTimer[1]);
        if (min > 0 || seg > 0) {
            seg = seg - 1
            if (seg < 0) {
                seg = 59;
                min = min - 1
            }
            this.setState({
                timer: this.convertTimer(min, seg)
            })
        } else {
            document.getElementById('beep').play();
            if (this.state.display === 'session') {
                this.setState({
                    display: 'break',
                    timer: this.convertTimer(this.state.breakLength, 0)
                })
            } else {
                this.setState({
                    display: 'session',
                    timer: this.convertTimer(this.state.sessionLength, 0)
                })
            }
        }
    }
    render() {
        return (
            <div className='pomodoro'>
                <ControlOne
                    breakLength={this.state.breakLength}
                    sessionLength={this.state.sessionLength}
                    breakDecrement={(e) => this.breakDecrement(e)}
                    breakIncrement={(e) => this.breakIncrement(e)}
                    sessionDecrement={(e) => this.sessionDecrement(e)}
                    sessionIncrement={(e) => this.sessionIncrement(e)}
                />
                <Timer
                    timer={this.state.timer}
                    display={this.state.display}
                />
                <ControlTwo
                    controlReset={(e) => this.controlReset(e)}
                    startStop={(e) => this.startStop(e)}
                />
            </div>
        );
    }
}

export default Pomodoro;
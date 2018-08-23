import React, { Component } from 'react';



class Stopwatch extends Component {
    render() {
        return (
            <div className="Stopwatch">
                <h1>Kello</h1>
                <Kello />
            </div>
        );
    }
}


class Kello extends Component {
    state = {
        status: false,
        runningTime: 0
    };
    handleClick = () => {
        this.setState(state => {
            if (state.status) {
                clearInterval(this.timer);
            } else {
                const startTime = (Date.now() - this.state.runningTime);
                this.timer = setInterval(() => {
                    this.setState({ runningTime: Date.now() - startTime });
                });
            }
            return { status: !state.status };
        });
    };

    handleReset = () => {
        this.setState({ runningTime: 0, running: false });
    };







    render() {
        const { status, runningTime } = this.state;
        return (
            <div>
                <p>  min {Math.round(runningTime / 1000)} sec</p>
                <button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;
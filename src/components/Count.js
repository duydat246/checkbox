import React, { Component } from 'react';

class Count extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }

    decrement() {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div>
                <div> count - {this.state.count}</div>
                <button onClick={() => this.increment()}>increment</button>
                <button onClick={() => this.decrement()}>decrement</button>
            </div>
        );
    }
}

export default Count;
import React, { Component } from 'react';

class Temperatures extends Component {

    constructor(props){
        super(props);
        this.state = {
            temperatures: []
        }
    }

    componentDidMount(){
        fetch('/temperatures')
        .then(res => res.json())
        .then(temp => {
            this.setState({temperatures: temp.rows});
            console.log(this.state.temperatures);
        });
    }

    render() {
        return (
            <ul>
                {
                    this.state.temperatures.map(temp => (
                        <li>Temperature:{temp.temperature}</li>
                    ))
                }
            </ul>
        )
    }
}

export default Temperatures;
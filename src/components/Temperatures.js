import React, { Component } from 'react';
import {io} from 'socket.io-client';

class Temperatures extends Component {

    constructor(props){
        super(props);
        this.state = {
            temperature: 10.0
        }
    }

    componentDidMount(){
        console.log('222222222222');
        //fetch('/temperatures')
        //.then(res => res.json())
        //.then(temp => {
        //    this.setState({temperatures: temp.rows});
        //   console.log(this.state.temperatures);
        //});
    }

    render(){
        return (
            <div>
                {
                    this.state.temperature
                }
            </div>
        )
    }

    //render() {
    //    return (
    //        <ul>
    //            {
    //                this.state.temperatures.map(temp => (
    //                    <li>Temperature:{temp.temperature}</li>
    //                ))
    //            }
    //        </ul>
    //    )
    //}
}

export default Temperatures;
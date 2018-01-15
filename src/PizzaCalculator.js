import React, { Component } from 'react';

import Result from './Result';
import Input from './Input';
import Title from './Title';

export default class PizzaCalculator extends Component {
    render() {
        const { numberOfPeople, slicesPerPerson, updateSlicesPerPerson, updateNumberOfPeople, numberOfPizzas, reset } = this.props;
        return ( <
            div className = "Application" >
            <
            Title / >
            <
            Input label = "Number of Guests"
            type = "number"
            min = { 0 }
            value = { numberOfPeople }
            onChange = { updateNumberOfPeople }
            /> <
            Input label = "Slices Per Person"
            type = "number"
            min = { 0 }
            value = { slicesPerPerson }
            onChange = { updateSlicesPerPerson }
            /> <
            Result amount = { numberOfPizzas }
            /> <
            button className = "full-width"
            onClick = { reset } >
            Reset <
            /button> <
            /div>

        );

    }
}
import React, { Component } from 'react';

import Title from './Title';
import Input from './Input';
import Result from './Result';
import PizzaCalculator from './PizzaCalculator';
import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

import { updateNumberOfPeople, updateSlicesPerPerson, reset } from './actions';
import PizzaStore from './PizzaStore';



const WithPizzaCalculations = WrappedComponent => {
    return class extends Component {
        static displayName = `WithPizzaCalculations(${WrappedComponent.displayName ||WrappedComponent.name})`;

        state = PizzaStore.getState();

        componentDidMount() {
            PizzaStore.on('change', this.updateState);
        }

        componentWillUnmount() {
            PizzaStore.off('change', this.updateState);
        }

        updateState = () => {
            this.setState(PizzaStore.getState());
        }

        updateNumberOfPeople = event => {
            const numberOfPeople = parseInt(event.target.value, 10);
            updateNumberOfPeople(numberOfPeople);
        };

        updateSlicesPerPerson = event => {
            const slicesPerPerson = parseInt(event.target.value, 10);
            updateSlicesPerPerson(slicesPerPerson);
        };

        reset = event => {
            reset();
        };



        render() {
            const { numberOfPeople, slicesPerPerson } = this.state;
            const numberOfPizzas = calculatePizzasNeeded(
                numberOfPeople,
                slicesPerPerson,
            );

            return ( <
                WrappedComponent numberOfPeople = { numberOfPeople }
                slicesPerPerson = { slicesPerPerson }
                updateSlicesPerPerson = { this.updateSlicesPerPerson }
                updateNumberOfPeople = { this.updateNumberOfPeople }
                numberOfPizzas = { numberOfPizzas }
                reset = { this.reset }
                />
            );
        }
    };
    // container.displayName =`WithPizzaCalculations(${WrappedComponent.displayName ||WrappedComponent.name})`;
    // return container;
};





const PizzaContainer = WithPizzaCalculations(PizzaCalculator);

export default class Application extends Component {
    render() {
        return ( <
            PizzaContainer / >
        )
    }
}
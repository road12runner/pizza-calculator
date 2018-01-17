import React, { Component } from 'react';
import {connect} from 'react-redux';
import PizzaCalculator from './PizzaCalculator';
import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

import {updateNumberOfPeople, updateSlicesPerPerson, reset} from './pizza-actions';



class Application extends Component {

	handleUpdateNumberOfPeople = event => {
		const numberOfPeople = parseInt(event.target.value, 10);
		this.props.updateNumberOfPeople(numberOfPeople);
	};

	handleUpdateSlicesPerPerson = event => {
		const slicesPerPerson = parseInt(event.target.value, 10);
		this.props.updateSlicesPerPerson(slicesPerPerson);
	};

	handleReset = () => {
		this.props.reset();
	};


	render () {
		const {numberOfPeople, slicesPerPerson, updateSlicesPerPerson, updateNumberOfPeople, reset} = this.props;
		const numberOfPizzas = calculatePizzasNeeded(
			numberOfPeople,
			slicesPerPerson,
		);
		return (<PizzaCalculator numberOfPeople={numberOfPeople}
		                         slicesPerPerson={slicesPerPerson}
		                         updateSlicesPerPerson={this.handleUpdateSlicesPerPerson}
		                         updateNumberOfPeople={this.handleUpdateNumberOfPeople}
		                         numberOfPizzas={numberOfPizzas}
		                         reset={this.handleReset}/>);
	}
}

const mapStateToProps = state => (
	{
		numberOfPeople: state.numberOfPeople,
		slicesPerPerson: state.slicesPerPerson
	}
);

export default connect(mapStateToProps, {updateNumberOfPeople, updateSlicesPerPerson, reset})(Application);
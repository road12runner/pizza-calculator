import EventEmitter from 'events';
import AppDispatcher from './AppDispatcher';

const initialState = {
    numberOfPeople: 10,
    slicesPerPerson: 2
};


export  const getInitialState = () => (initialState);


let calculator = {...initialState };

class PizzaStore extends EventEmitter {
    constructor() {
        super();

        AppDispatcher.register((action) => {
            if (action.type === 'UPDATE_NUMBER_OF_PEOPLE') {
                calculator.numberOfPeople = action.number;
                this.emit('change');
            }
            if (action.type === 'UPDATE_SLICES_PER_PERSON') {
                calculator.slicesPerPerson = action.number;
                this.emit('change');
            }
            if (action.type === 'RESET') {
                calculator = {...initialState };
                this.emit('change');
            }

        });
    }

    getState() {
        return calculator;
    }
}


export default new PizzaStore();
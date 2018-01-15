import AppDispatcher from './AppDispatcher';

export const updateNumberOfPeople = (number) => {
    AppDispatcher.dispatch({
        type: 'UPDATE_NUMBER_OF_PEOPLE',
        number
    });
};

export const updateSlicesPerPerson = (number) => {
    AppDispatcher.dispatch({
        type: 'UPDATE_SLICES_PER_PERSON',
        number
    });
};


export const reset = () => {
    AppDispatcher.dispatch({
        type: 'RESET'
    });
};
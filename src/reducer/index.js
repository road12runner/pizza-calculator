const initialState = {
	numberOfPeople: 10,
	slicesPerPerson: 2
};


export const getInitialState = () => (initialState);


export default function (state = initialState, action) {
	switch (action.type) {
		case 'UPDATE_NUMBER_OF_PEOPLE':
			return {...state, numberOfPeople : action.number};
		case 'UPDATE_SLICES_PER_PERSON':
			return {...state, slicesPerPerson : action.number};

		case 'RESET':
			return {...initialState};
		default:
			return state;
	}
}



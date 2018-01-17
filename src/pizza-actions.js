
export const updateNumberOfPeople = number => (	{
	type: 'UPDATE_NUMBER_OF_PEOPLE',
	number
});

export const updateSlicesPerPerson = number => ({
	type: 'UPDATE_SLICES_PER_PERSON',
	number
});


export const reset = () => ({
	type: 'RESET'
});
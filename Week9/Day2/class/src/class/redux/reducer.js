let initState = {
    property_one_one: 'text one',
    property_two_two: 'text one'
}

export const reducer = (state = initState, action={}) => {
        // in redux we always return a clone of a state
    switch (action.type) {
        case 'PROP_ONE':
            return {...state, property_one:action.payload}
            break;
        case 'PROP_TWO':
            return {...state, property_two:state.property_one}
            break;
        default:
                return {...state}

    }
        

    
}
let initState = {
    property_counter: 0
}

export const reducer = (state = initState, action={}) => {
        // in redux we always return a clone of a state
        switch (action.type) {
            case 'INCREASE_COUNT':
                return {...state, count: ++state.count}
            case 'DECREASE_COUNT':
                return {...state, count: __state.count}
            default:
                return {...state}
    }
        

    
}
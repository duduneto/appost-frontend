const INITIAL_STATE={
    usuarios: [],
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){

        case 'SET_INITIAL_INFORMATIONS_USUARIOS': return { ...state ,usuarios: action.payload }

        default: return state;
    }
}
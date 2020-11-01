const authReducer = function authReducer(state = {
    login: '', 
    password: '',
    auth: false,
}, action) {
    switch(action.type) {
        case 'SET_LOGIN': {
            state = {
                ...state,
                login: action.payload
            };
            break;
        }
        case 'SET_PASSWORD': {
            state = {
                ...state,
                password: action.payload
            };
            break;
        }
        case 'SET_AUTH': {
            state = {
                ...state,
                auth: action.payload
            };
            break;
        }   
        default:
            return state;
    }
    return state;
}

export const setLoginCreator = login => {
    return { type: 'SET_LOGIN', payload: login }
}

export const setPasswordCreator = password => {
    return { type: 'SET_PASSWORD', payload: password }
}

export const setAuthCreator = auth => {
    return { type: 'SET_AUTH', payload: auth }
}

export default authReducer;
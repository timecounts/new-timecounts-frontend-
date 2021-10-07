import {
    LOGIN_FAILURE,
    LOGIN_REQUEST, 
    LOGIN_SUCCESS,

} from '../actions/actionTypes/authType'

const initialState = {
    loading: false,
    tokens: {},
    error: ''
}

const authReducer = (state = initialState, action) => {
    console.log('Auth Reducer: ', action)
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case LOGIN_SUCCESS:
            return {
                loading: false,
                tokens: action.payload,
                error: ''
            }

        case LOGIN_FAILURE:
            return {
                loading: false,
                tokens: {},
                error: action.payload
            }

        default:
            return state
    }
}

export default authReducer
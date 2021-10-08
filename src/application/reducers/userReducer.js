import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
} from '../actions/actionTypes/userType'

const initialState = {
    signupLoading: false,
    signupMessage: '',
    signError: '',
}

const userReducer = (state = initialState, action) => {
    console.log('User Reducer: ', action)
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                signupLoading: true
            }

        case SIGNUP_SUCCESS:
            return {
                ...state,
                signupLoading: false,
                signupMessage: action.payload,
                signError: ''
            }

        case SIGNUP_FAILURE:
            return {
                ...state,
                signupLoading: false,
                signupMessage: '',
                signError: action.payload
            }
            
        default:
            return state
    }
}

export default userReducer
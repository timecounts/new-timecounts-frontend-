import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    FLUSH_USER_ERROR_FROM_STATE
} from '../actions/actionTypes/userType'

const initialState = {
    loading: false,
    signupMessage: '',
    error: '',
}

const userReducer = (state = initialState, action) => {
    console.log('User Reducer: ', action)
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true
            }

        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                signupMessage: action.payload,
                error: ''
            }

        case SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                signupMessage: '',
                error: action.payload
            }

        case FLUSH_USER_ERROR_FROM_STATE:
            return {
                ...state,
                error: ''
            }
            
        default:
            return state
    }
}

export default userReducer
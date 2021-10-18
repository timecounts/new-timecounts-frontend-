import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    FLUSH_USER_STATE_FROM_STATE
} from '../actions/actionTypes/userType'

const initialState = {
    loading: false,
    message: '',
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
                message: action.payload,
                error: ''
            }

        case SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                message: '',
                error: action.payload
            }

        case FLUSH_USER_STATE_FROM_STATE:
            return {
                ...state,
                loading: false,
                message: '',
                error: ''
            }
            
        default:
            return state
    }
}

export default userReducer
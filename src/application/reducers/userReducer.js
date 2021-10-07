import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE

} from '../actions/actionTypes/userType'

const initialState = {
    loading: false,
    message: '',
    error: ''
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
                loading: false,
                message: action.payload,
                error: ''
            }

        case SIGNUP_FAILURE:
            return {
                loading: false,
                message: '',
                error: action.payload
            }

        default:
            return state
    }
}

export default userReducer
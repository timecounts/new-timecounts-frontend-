import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE

} from '../actions/actionTypes/authType'

const initialState = {
    loading: false,
    tokens: {
        success: false
    },
    error: '',
    logoutLoading: false,
    logoutSuccess: false,
    logoutError: ''
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

        case LOGOUT_REQUEST:
            return {
                ...state,
                logoutLoading: true
            }

        case LOGOUT_SUCCESS:
            return {
                ...state,
                logoutLoading: false,
                logoutSuccess: action.payload,
                logoutError: '',
                tokens: {
                    success: false
                }
            }

        case LOGOUT_FAILURE:
            return {
                ...state,
                logoutLoading: false,
                logoutSuccess: '',
                logoutError: action.payload
            }

        default:
            return state
    }
}

export default authReducer
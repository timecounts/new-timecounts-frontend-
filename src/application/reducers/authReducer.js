import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    FLUSH_AUTH_STATE_FROM_STATE,
    RESEND_EMAIL_REQUEST,
    RESEND_EMAIL_SUCCESS,
    RESEND_EMAIL_FAILURE

} from '../actions/actionTypes/authType'

const initialState = {
    loading: false,
    tokens: {
        success: false
    },
    error: '',
    logoutSuccess: false,
    resendMessage: ''
}

const authReducer = (state = initialState, action) => {
    console.log('Auth Reducer: ', action)
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
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
                tokens: {
                    success: false
                },
                error: action.payload
            }

        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            }

        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                logoutSuccess: action.payload,
                error: '',
                tokens: {
                    success: false
                }
            }

        case LOGOUT_FAILURE:
            return {
                ...state,
                loading: false,
                logoutSuccess: false,
                error: action.payload
            }

        case FLUSH_AUTH_STATE_FROM_STATE:
            return {
                ...state,
                loading: false,
                resendMessage: '',
                error: ''
            }

        case RESEND_EMAIL_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            }

        case RESEND_EMAIL_SUCCESS: 
            return {
                ...state,
                loading: false,
                resendMessage: action.payload,
                error: ''
            }

        case RESEND_EMAIL_FAILURE:
            return {
                ...state,
                loading: false,
                resendMessage: '',
                error: action.payload
            }

        default:
            return state
    }
}

export default authReducer
import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    FLUSH_USER_ERROR_FROM_STATE
} from './actionTypes/userType'
import services from '../../infrastructure/services'

// User Signup Actions
export const signupRequest = () => {
    return {
        type: SIGNUP_REQUEST
    }
}

export const signupSuccess = data => {
    return {
        type: SIGNUP_SUCCESS,
        payload: data
    }
}

export const signupFailure = error => {
    return {
        type: SIGNUP_FAILURE,
        payload: error
    }
}

export const flushUserError = () => {
    return {
        type: FLUSH_USER_ERROR_FROM_STATE
    }
}

export const signup = requestBody => {
    return dispatch => {
        dispatch(signupRequest)
        services
            .user
            .signup(requestBody)
            .then(response => {
                const data = response.data
                dispatch(signupSuccess(data))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(signupFailure(errorMessage))
            })
    }
}
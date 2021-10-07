import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from './actionTypes/userType'
import services from '../../infrastructure/services'

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
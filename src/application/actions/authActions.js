import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './actionTypes/authType'
import services from '../../infrastructure/services'

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = data => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export const loginFailure = error => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export const login = requestBody => {
    return dispatch => {
        dispatch(loginRequest)
        services
            .auth
            .login(requestBody)
            .then(response => {
                const data = response.data
                dispatch(loginSuccess(data))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(loginFailure(errorMessage))
            })
    }
}

export const googleLogin = () => {
    return dispatch => {
        dispatch(loginRequest)
        services
            .auth
            .googleAuth()
            .then(response => {
                const data = response.data
                dispatch(loginSuccess(data))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(loginFailure(errorMessage))
            })
    }
}

export const facebookLogin = () => {
    return dispatch => {
        dispatch(loginRequest)
        services
            .auth
            .facebookAuth()
            .then(response => {
                const data = response.data
                dispatch(loginSuccess(data))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(loginFailure(errorMessage))
            })
    }
}
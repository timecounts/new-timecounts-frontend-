import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from './actionTypes/authType'
import services from '../../infrastructure/services'
import { signupRequest } from '.'

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

export const googleLogin = response => {
    return dispatch => {
        console.log('From Google: ', response)
        dispatch(loginRequest)
        services
            .auth
            .googleLogin(response)
            .then(res => {
                console.log('Google Response: ', res)
                const data = res.data
                dispatch(loginSuccess(data))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(loginFailure(errorMessage))
            })
    }
}

export const googleSignup = response => {
    return dispatch => {
        dispatch(signupRequest)
        services
            .auth
            .googleSignup(response)
            .then(res => {
                console.log('Google Response: ', res)
                const data = res.data
                dispatch(loginSuccess(data))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(loginFailure(errorMessage))
            })
    }
}

export const facebookLogin = response => {
    return dispatch => {
        dispatch(loginRequest)
        services
            .auth
            .facebookLogin(response)
            .then(res => {
                console.log('Facebook Response: ', res)
                const data = res.data
                dispatch(loginSuccess(data))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(loginFailure(errorMessage))
            })
    }
}

export const facebookSignup = response => {
    return dispatch => {
        dispatch(signupRequest)
        services
            .auth
            .facebookSignup(response)
            .then(res => {
                console.log('Facebook Response: ', res)
                const data = res.data
                dispatch(loginSuccess(data))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(loginFailure(errorMessage))
            })
    }
}

// Auth Logout Actions
export const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST
    }
}

export const logoutSuccess = data => {
    return {
        type: LOGOUT_SUCCESS,
        payload: data
    }
}

export const logoutFailure = error => {
    return {
        type: LOGOUT_FAILURE,
        payload: error
    }
}

export const logout = requestBody => {
    return dispatch => {
        dispatch(logoutRequest)
        services
            .auth
            .logout(requestBody)
            .then(response => {
                const data = 'User Successfully logged out.'
                dispatch(logoutSuccess(data))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(logoutFailure(errorMessage))
            })
    }
}

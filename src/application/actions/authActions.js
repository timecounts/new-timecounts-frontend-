import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
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

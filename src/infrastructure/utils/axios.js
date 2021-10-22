import axios from 'axios'
import store from '../../application/store'
import * as ActionCreators from '../../application/actions'

const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1/',
    headers: {
        "Content-Type": "application/json",
    },
})

api.interceptors.request.use((request) => {
    const auth = store.getState().auth;
    if (auth.tokens) request.headers.Authorization = `Bearer ${auth.tokens.accessToken}`;
    return request;
})

api.interceptors.response.use(
    res => {
        return res
    },
    async error => {
        if (error.response.status === 401 && error.response.data.message === 'The token is either invalid or expired!') {
            console.log(error.response.data)
            try {
                store.dispatch(ActionCreators.fetchNewAcessTokenRequest())
                
                await api
                    .post('auth/refresh-token', {
                        refreshToken: store.getState().auth.tokens.refreshToken
                    })
                    .then(response => {
                        console.log(response.data)
                        store.dispatch(ActionCreators.fetchNewAccessTokenSuccess({
                            accessToken: response.data.accessToken,
                            refreshToken: response.data.refreshToken
                        }))
                        error.response.data.message = 'Please, try again.'
                    })
                    .catch(e => {
                        console.log(e.response.data.message)
                        store.dispatch(ActionCreators.fetchNewAccessTokenFailure(e.response.data.message))
                        store.dispatch(ActionCreators.flushAuthState())
                        error.response.data.message = 'Access Denied! Please, logout and login.'
                    }) 

                    console.log(error.response.data.message)
                    return Promise.reject(error)
            } catch (_error) {
                return Promise.reject(_error)
            }
        }
        return Promise.reject(error)
    }
)

export default api
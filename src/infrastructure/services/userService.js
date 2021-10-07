import api from '../utils/axios'

const userService = {
    signup: payload => api.post('/user/signup', payload)
}

export default userService

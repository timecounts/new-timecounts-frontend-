import authService from './authService'
import userService from './userService'
import organizationService from './organizationService'

const services = {
    auth: authService,
    user: userService,
    organization: organizationService
}

export default services

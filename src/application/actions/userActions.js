import { LOGGED_USER } from './constants/userConstants'

export const loggedUser = () => {
    return {
        type: LOGGED_USER,
    }
}
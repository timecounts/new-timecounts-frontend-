import { LOGGED_USER } from '../actions/actionTypes/userType'

const initialState = {
    username: 'Deepanshu Patel'
}

const userReducer = (state = initialState, action) => {
    console.log('User Reducer: ', action)
    switch (action.type) {
        case LOGGED_USER: return {
            ...state,
            username: 'Cristiano Ronaldo 7'
        }

        default: return state
    }
}

export default userReducer
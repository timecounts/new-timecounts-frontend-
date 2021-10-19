import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './userReducer'
import authReducer from './authReducer'
import organizationReducer from './organizationReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'user', 'organization']
}

const reducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    organization: organizationReducer
})

export default persistReducer(persistConfig, reducer)

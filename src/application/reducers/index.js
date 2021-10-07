import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './userReducer'
import authReducer from './authReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const reducer = combineReducers({
    user: userReducer,
    auth: authReducer
})

export default persistReducer(persistConfig, reducer)

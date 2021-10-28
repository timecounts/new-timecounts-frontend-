import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { persistor } from './application/store'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './responsive.css'
import './App.css'
import 'react-notifications/lib/notifications.css'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
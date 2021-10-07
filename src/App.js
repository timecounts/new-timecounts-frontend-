import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFound from './view/pages/NotFound'
import SignUp from './view/pages/auth/SignUp'
import SignupWithEmail from './view/pages/auth/SignupWithEmail'
import Login from './view/pages/auth/Login'

function App() {
    return (
            <BrowserRouter>
                <Switch>
                    <Route path='/signup-with-email/:id' component={SignupWithEmail} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/login' component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
    )
}

export default App

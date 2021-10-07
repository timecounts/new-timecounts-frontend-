import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import NotFound from './view/pages/NotFound'
import SignUp from './view/pages/auth/SignUp'
import SignupWithEmail from './view/pages/auth/SignupWithEmail'
import Login from './view/pages/auth/Login'
import UserSwitch from './view/pages/user/UserSwitch'

function App({ userTokens, loading, error }) {
    return (
        <BrowserRouter>
            {
                !userTokens ? (
                    <Switch>
                        <Route path='/signup-with-email/:id' component={SignupWithEmail} />
                        <Route path='/signup' component={SignUp} />
                        <Route path='/login' component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                ) : (
                    <Switch>
                        <Route path='/user-switch' component={UserSwitch} />
                        <Route component={NotFound} />
                    </Switch>
                )
            }


        </BrowserRouter>
    )
}

const mapStateToProps = state => {
    return {
        userTokens: state.user.tokens,
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // login: requestBody => dispatch(ActionCreators.login(requestBody)),
        // googleLogin: () => dispatch(ActionCreators.googleLogin()),
        // facebookLogin: () => dispatch(ActionCreators.facebookLogin())
    }
}

export default connect(mapStateToProps)(App)

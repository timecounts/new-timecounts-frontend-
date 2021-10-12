import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import NotFound from './view/pages/NotFound'
import SignUp from './view/pages/auth/SignUp'
import Login from './view/pages/auth/Login'
import ConfirmYourEmail from './view/pages/auth/ConfirmYourEmail'
import InactiveDefault from './view/pages/inactive/InactiveDefault'
import ResentEmail from './view/pages/auth/ResentEmail'
import EmailConfirmed from './view/pages/auth/EmailConfirmed'

function App({ userTokens, loading, error }) {

    const [tokens, setTokens] = useState({})

    useEffect(() => {
        setTokens(userTokens)
    }, [userTokens])

    useEffect(() => {
        console.log(error)
        console.log(tokens)
    }, [tokens, error])

    return (
        <BrowserRouter>
                {
                    !tokens.success ? (
                        <Switch>
                            <Route path='/email-confirmed/:emailId' component={EmailConfirmed} />
                            <Route path='/email-resent/:emailId/' component={ResentEmail} />
                            <Route path='/confirm-your-email/:emailId' component={ConfirmYourEmail} />
                            <Route path='/signup' component={SignUp} />
                            <Route path='/login' component={Login} />
                            <Route exact path='/'>
                                <Redirect to='/login' />
                            </Route>
                            <Route component={NotFound} />
                        </Switch>
                    ) : (
                        <Switch>
                            <Route path='/inactive-default' component={InactiveDefault} />
                            <Route component={NotFound} />
                        </Switch>
                    )
                }
        </BrowserRouter>
    )
}

const mapStateToProps = state => {
    return {
        userTokens: state.auth.tokens,
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

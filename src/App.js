import { useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import NotFound from './view/pages/NotFound'
import SignUp from './view/pages/auth/SignUp'
import Login from './view/pages/auth/Login'
import ConfirmYourEmail from './view/pages/auth/ConfirmYourEmail'
import InactiveDefault from './view/pages/inactive/InactiveDefault'
import ResentEmail from './view/pages/auth/ResentEmail'
import EmailConfirmed from './view/pages/auth/EmailConfirmed'
import OrganizationCreation from './view/pages/organization/OrganizationCreation'
import CategorySelection from './view/pages/organization/CategorySelection'
import AreaSelection from './view/pages/organization/AreaSelection'
import GoalSelection from './view/pages/organization/GoalSelection'
import CreationRequestPending from './view/pages/organization/CreationRequestPending'

function App({ userTokens, loading, error }) {

    useEffect(() => {
        console.log(userTokens)
    }, [userTokens])

    return (
        <BrowserRouter>
                {
                    !userTokens.success ? (
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
                            <Route path='/organization/pending-creation' component={CreationRequestPending} />
                            <Route path='/organization/goal' component={GoalSelection} />
                            <Route path='/organization/area' component={AreaSelection} />
                            <Route path='/organization/category' component={CategorySelection} />
                            <Route path='/organization/creation' component={OrganizationCreation} />
                            <Route path='/inactive-default' component={InactiveDefault} />
                            <Route exact path='/'>
                                <Redirect to='/inactive-default' />
                            </Route>
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

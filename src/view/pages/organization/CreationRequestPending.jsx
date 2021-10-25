import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as ActionCreators from '../../../application/actions'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import LoggedSimpleHeader from '../../components/common/LoggedSimpleHeader'

const CreationRequestPending = ({
    email,
    logoutLoading,
    logoutSuccess,
    logoutError,
    flushAuthState
}) => {

    const history = useHistory()

    useEffect(() => {
        if (logoutError) {
            NotificationManager.error(logoutError, 'Logout Error', 5000)
            flushAuthState()
        }
    }, [logoutError])

    useEffect(() => {
        if (logoutSuccess === 'User Successfully logged out.') {
            flushAuthState()
            history.push('/login')
        }
    }, [logoutSuccess])

    return <div className="site-wrap">
        <LoggedSimpleHeader />
        <div className="site-container">
            <div className="container">
                <div className="step-form">
                    <div className="modal-wrap">
                        <div className="modal-bodies">
                            <div className="modal-body modal-body-step-5 is-showing">
                                <div className="description">You are almost there</div>
                                <div className="text-center">
                                    <p className="eamil-sent-text">Your request to create a new organization is pending approval. You should
                                        shortly receive a confirmation on email <span><a href=""
                                            className="email-link">{email}</a></span></p>
                                    <div 
                                        className="button"
                                        style={{
                                            textTransform: 'none'
                                        }}
                                        onClick={() => history.push('/')}
                                    >
                                        Back to Dashbaord
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NotificationContainer />
    </div>
}

const mapStateToProps = state => {
    return {
        email: state.auth.tokens?.userData?.email,
        logoutLoading: state.auth.loading,
        logoutSuccess: state.auth.logoutSuccess,
        logoutError: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        flushAuthState: () => dispatch(ActionCreators.flushAuthState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreationRequestPending)

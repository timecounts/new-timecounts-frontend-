import { Link, useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import * as ActionCreators from '../../../application/actions'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { useEffect } from 'react'

const ConfirmYourEmail = ({ loading, message, error, resendEmail, flushAuthState }) => {

    const params = useParams()
    const history = useHistory()

    useEffect(() => {
        if (error) {
            NotificationManager.error(error.message, 'Resend Email Error', 5000)
            flushAuthState()
        }
    }, [error])

    useEffect(() => {
        if (message === undefined) return
        if (message.data === 'Mail has been resent.') history.push(`/email-resent/${params.emailId}`)
    }, [message])

    const handleResend = async e => {
        e.preventDefault()

        await resendEmail({
            email: params.emailId
        })
    }

    return <div className="signup-wrapper">
        <div className="container">
            <div className="sw-content grid">
                <h1>You are almost there</h1>
                <p className="eamil-sent-text">
                    You need to click the verification link we sent to 
                    <span><Link to='#' className="email-link">{params.emailId}</Link></span>
                </p>
                <p className="already-acc">Didn’t get the email? Check your spam folder or {' '}
                    <Link to="#" onClick={handleResend}>resend it</Link>
                </p>
                <div className="form-group">
                    <button 
                        type="button" 
                        className="input-submit" 
                        onClick={e => {
                            e.preventDefault()

                            history.push('/login')
                        }}
                    >
                        Go back to Log in
                    </button>
                </div>
            </div>
        </div>
        <NotificationContainer />
    </div>
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        message: state.auth.resendMessage,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resendEmail: requestBody => dispatch(ActionCreators.resendEmail(requestBody)),
        flushAuthState: () => dispatch(ActionCreators.flushAuthState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmYourEmail)

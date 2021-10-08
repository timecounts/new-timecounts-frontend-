import { Link, useParams, useHistory } from 'react-router-dom'

const ConfirmYourEmail = () => {

    const params = useParams()
    const history = useHistory()

    return <div className="signup-wrapper">
        <div className="container">
            <div className="sw-content grid">
                <h1>You are almost there</h1>
                <p className="eamil-sent-text">
                    You need to click the verification link we sent to 
                    <span><Link to={`mailto:${params.emailId}`} className="email-link">{params.emailId}</Link></span>
                </p>
                <p className="already-acc">Didn’t get the email? Check your spam folder or {' '}
                    <Link to="">resend it</Link>
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
    </div>
}

export default ConfirmYourEmail

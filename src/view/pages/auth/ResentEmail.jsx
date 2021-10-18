import { Link, useParams, useHistory } from 'react-router-dom'

const ResentEmail = () => {

    const params = useParams()
    const history = useHistory()

    return <div className="signup-wrapper">
        <div className="container">
            <div className="sw-content grid">
                <h1>Email has been resent</h1>
                <p className="eamil-sent-text">
                    You need to click the verification link we sent to 
                    <span><Link to="" className="email-link">{params.emailId}</Link></span>
                </p>
                <p className="already-acc">
                    Didn’t get the email? Check your spam folder or contact the {' '}
                    <Link to="">support center</Link>
                </p>
                <div className="form-group">
                    <button type="button" className="input-submit" onClick={() => history.push('/login')}>Go back to Log in</button>
                </div>
            </div>
        </div>
    </div>
}

export default ResentEmail
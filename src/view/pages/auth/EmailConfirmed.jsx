import { Link, useParams, useHistory } from 'react-router-dom'

const EmailConfirmed = () => {

    const params = useParams()
    const history = useHistory()

    return <div className="signup-wrapper">
        <div className="container">
            <div className="sw-content grid">

                <h1>Thank you for the email confirmation!</h1>

                <p className="already-acc confirm-text">
                    Your email {' '}
                    <Link to='#'>{params.emailId}</Link> {' '}
                     was successfully verified.
                </p>
                <div className="form-group">
                    <button type="button" className="input-submit" onClick={() => history.push('/login')}>Go back to Log in</button>
                </div>
            </div>
        </div>
    </div>
}

export default EmailConfirmed
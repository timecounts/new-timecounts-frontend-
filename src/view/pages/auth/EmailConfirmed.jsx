import { Link, useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import * as ActionCreators from '../../../application/actions'

const EmailConfirmed = ({ flushUserState, flushAuthState }) => {

    const params = useParams()
    const history = useHistory()

    const handleClick = e => {
        e.preventDefault()

        flushUserState()
        flushAuthState()
        history.push('/login')
    }

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
                    <button type="button" className="input-submit" onClick={handleClick}>Go back to Log in</button>
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        flushUserState: () => dispatch(ActionCreators.flushUserState()),
        flushAuthState: () => dispatch(ActionCreators.flushAuthState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailConfirmed)
import { useState } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import SignupLoginButton from '../../components/SignupLoginButton'
import SocialButton from "../../components/SocialButton";
import * as ActionCreators from '../../../application/actions'

import GoogleIcon from '../../assets/images/icon-google.svg'
import FacebookIcon from '../../assets/images/icon-fb-colorful.svg'
import AppleIcon from '../../assets/images/icon-apple.svg'
import MailIcon from '../../assets/images/icon-mail.svg'

const SignUp = ({googleLogin, facebookLogin}) => {

    const history = useHistory()
    const [signWithEmail, setSignWithEmail] = useState(false)
    const [email, setEmail] = useState('')

    const continueButton = e => {
        e.preventDefault()

        if (email) {
            yup
                .string()
                .email()
                .validate(email)
                .then(data => {
                    history.push(`/signup-with-email/${data}`)
                })
                .catch(error => console.error(error.message))
        }
    }

    const handleGoogleLogin = (response) => {

        googleLogin(response)
    }

    const handleFacebookLogin = (response) => {

        facebookLogin(response)
    }

    const handleSocialLoginFailure = (error) => {
        console.log(error)
    }

    return (
        <div className="signup-wrapper">
            <div className="container">
                <div className="sw-content">
                    <h1>Join Timecounts</h1>
                    <form>
                    <SocialButton 
                        provider="google"
                        appId="658889701022-vkbqi7g6jcaj14uppe0g34vpaipnpp1b.apps.googleusercontent.com"
                        onLoginSuccess={handleGoogleLogin}
                        onLoginFailure={handleSocialLoginFailure}
                    >
                        <div className={`Google-log input-btn`}>
                            <img src={GoogleIcon} alt={`Google Icon`} />
                            <span>Sign up with Google</span>
                        </div>
                    </SocialButton>

                    <SocialButton 
                        provider="facebook"
                        appId="156007886613791"
                        onLoginSuccess={handleFacebookLogin}
                        onLoginFailure={handleSocialLoginFailure}
                    >
                        <div className={`Facebook-log input-btn`}>
                            <img src={FacebookIcon} alt={`Facebook Icon`} />
                            <span>Sign up with Facebook</span>
                        </div>
                    </SocialButton>

                        <SignupLoginButton
                            image={AppleIcon}
                            social={'Apple'}
                            link='www.apple.com'
                        />
                        <p className="or-text">Or</p>
                        {
                            !signWithEmail ? (
                                <div className="form-group">
                                    <Link
                                        onClick={e => setSignWithEmail(previousState => !previousState)}
                                        className="email-log input-btn"
                                    >
                                        <img src={MailIcon} alt='Mail Icon' />
                                        <span>Sign up with Email</span>
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <div className="form-group">
                                        <input 
                                            type="email" 
                                            className="input-text" 
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        <label className="input-label-txt">
                                            Email
                                        </label>
                                    </div>
                                    <div className="form-group">

                                        <button 
                                            type="button" 
                                            className="input-submit"
                                            onClick={continueButton}
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </>
                            )
                        }
                    </form>
                    <p className="already-acc">
                        Already have an account? {' '}
                        <Link href="">Log in</Link>
                    </p>
                    <p className="terms-text">
                        By signing up, you agree to our {' '}
                        <Link href="">Terms</Link> {' '}
                        and that you have read our {' '}
                        <Link href="">Privacy Policy</Link>.</p>
                </div>
            </div>
        </div>
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
        login: requestBody => dispatch(ActionCreators.login(requestBody)),
        googleLogin: () => dispatch(ActionCreators.googleLogin()),
        facebookLogin: () => dispatch(ActionCreators.facebookLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

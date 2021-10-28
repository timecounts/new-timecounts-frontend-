import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import * as ActionCreators from '../../../application/actions'
import * as yup from 'yup'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import SignupLoginButton from '../../components/auth/SignupLoginButton'
import SocialButton from '../../components/auth/SocialButton'
import IconButton from '@mui/material/IconButton'

import GoogleIcon from '../../assets/images/icon-google.svg'
import FacebookIcon from '../../assets/images/icon-fb-colorful.svg'
import AppleIcon from '../../assets/images/icon-apple.svg'
import MailIcon from '../../assets/images/icon-mail.svg'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const Login = ({ login, googleLogin, facebookLogin, flushAuthState, userTokens, loading, error }) => {

    const history = useHistory()
    const [signWithEmail, setSignWithEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (userTokens.success) {
            history.push('/')
        }
    }, [userTokens])

    useEffect(() => {
        if (error) {
            NotificationManager.error(error, 'Login Error', 5000)
            flushAuthState()
        }
    }, [error])

    const handleLogin = async e => {
        e.preventDefault()

        if (email !== '' && password !== '') {
            try {
                const sanitizedEmail = await yup
                    .string()
                    .email()
                    .validate(email)
                const sanitizedPassword = await yup
                    .string()
                    .min(8)
                    .validate(password)

                await login({
                    email: sanitizedEmail,
                    password: sanitizedPassword
                })
            } catch (error) {
                NotificationManager.error(error.message, 'Login Error', 5000)
                flushAuthState()
            }
        } else {
            NotificationManager.error('Your email and password field should not be empty.', 'Empty fields', 3000)
        }
    }

    const handleGoogleLogin = response => {
        googleLogin(response)
    }

    const handleFacebookLogin = response => {
        facebookLogin(response)
    }

    const handleSocialLoginFailure = error => {
        if (error) {
            NotificationManager.error(error, 'Login Error', 5000)
            flushAuthState()
        }
    }

    return (
        <div className="signup-wrapper">
            <div className="container">
                <div className="sw-content">
                    <h1>Log in</h1>
                    <form>
                        {/* <SocialButton
                            provider="google"
                            appId="658889701022-vkbqi7g6jcaj14uppe0g34vpaipnpp1b.apps.googleusercontent.com"
                            onLoginSuccess={handleGoogleLogin}
                            onLoginFailure={handleSocialLoginFailure}
                        >
                            <div className={`Google-log input-btn`}>
                                <img src={GoogleIcon} alt={`Google Icon`} />
                                <span>Log in with Google</span>
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
                                <span>Log in with Facebook</span>
                            </div>
                        </SocialButton> */}

                        <SignupLoginButton
                            type='Log in'
                            image={AppleIcon}
                            social={'Apple'}
                        />
                        <p className="or-text">Or</p>
                        {
                            !signWithEmail ? (
                                <div className="form-group" onClick={() => setSignWithEmail(true)}>
                                    <div className="email-log input-btn">
                                        <img src={MailIcon} alt='mail icon' />
                                        <span>Log in with Email</span>
                                    </div>
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
                                        <label className="input-label-txt">Email</label>
                                    </div>

                                    <div className="form-group">
                                        <div
                                            className='input-text'
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                padding: "3px"
                                            }}
                                        >
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                style={{
                                                    flex: "1",
                                                    border: "none",
                                                    outlineWidth: "0",
                                                    outline: "none"
                                                }}
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                            {
                                                !showPassword ?
                                                    <IconButton>
                                                        <VisibilityIcon
                                                            onClick={() => setShowPassword(true)}
                                                        />
                                                    </IconButton> :
                                                    <IconButton>
                                                        <VisibilityOffIcon
                                                            onClick={() => setShowPassword(false)}
                                                        />
                                                    </IconButton>
                                            }
                                        </div>
                                        <label className="input-label-txt">Password</label>
                                    </div>

                                    <div className="form-group" onClick={handleLogin}>
                                        <button
                                            type="button"
                                            className="input-submit"
                                        >
                                            Log In
                                        </button>
                                    </div>
                                </>
                            )
                        }
                    </form>
                    <p className="already-acc">
                        Don’t have an account? {' '}
                        <Link to="/signup">Sign up</Link>
                    </p>
                    <p className="terms-text">
                        By signing up, you agree to our {' '}
                        <Link to="">Terms</Link> {' '}
                        and that you have read our {' '}
                        <Link>Privacy Policy</Link>.
                    </p>
                </div>
            </div>
            <NotificationContainer />
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
        googleLogin: requestBody => dispatch(ActionCreators.googleLogin(requestBody)),
        facebookLogin: requestBody => dispatch(ActionCreators.facebookLogin(requestBody)),
        flushAuthState: () => dispatch(ActionCreators.flushAuthState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

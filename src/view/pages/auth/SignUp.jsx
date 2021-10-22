import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import * as ActionCreators from '../../../application/actions'
import { connect } from 'react-redux'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import SignupLoginButton from '../../components/auth/SignupLoginButton'
import SocialButton from '../../components/auth/SocialButton'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import PasswordStrengthBar from 'react-password-strength-bar'

import GoogleIcon from '../../assets/images/icon-google.svg'
import FacebookIcon from '../../assets/images/icon-fb-colorful.svg'
import AppleIcon from '../../assets/images/icon-apple.svg'
import MailIcon from '../../assets/images/icon-mail.svg'

const SignUp = ({ signup, googleSignup, facebookSignup, userTokens, message, loading, error, flushUserState }) => {

    const history = useHistory()
    const [signWithEmail, setSignWithEmail] = useState(false)
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const regex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')

    useEffect(() => {
        if (message.data === 'User created successfully.') {
            flushUserState()
            history.push(`/confirm-your-email/${email}`)
        }
    }, [message])

    const handleSignup = async e => {
        e.preventDefault()

        if (email !== '' && fullname !== '' && password !== '') {
            try {
                const sanitizedFullname = await yup
                    .string(message='Your full name must be a valid string.')
                    .validate(fullname)
                const sanitizedEmail = await yup
                    .string(message='Your email must be a valid string.')
                    .email(message='Your email must be a valid email.')
                    .validate(email)
                setEmail(sanitizedEmail)
                const sanitizedPassword = await yup
                    .string(message='Your password must be a valid string.')
                    .min(8, message='Your password must be at least 8 characters long.')
                    .max(60, message='Your password must be less than 60 characters.')
                    .matches(regex, message='Your password must contain at least one uppercase, lowercase and number')
                    .validate(password)

                await signup({
                    fullName: sanitizedFullname,
                    email: sanitizedEmail,
                    password: sanitizedPassword
                })
            } catch (error) {
                NotificationManager.error(error.message, 'Signup Error', 5000)
                flushUserState()
            }
        } else {
            NotificationManager.error('Your input fields should not be empty.', 'Empty fields', 3000)
        }
    }

    useEffect(() => {
        if (error) {
            NotificationManager.error(error, 'Signup Error', 5000)
            flushUserState()
        }
    }, [error])

    useEffect(() => {
        if (userTokens.success) {
            history.push('/inactive-default')
        }
    }, [userTokens])

    const handleGoogleSignup = response => {
        googleSignup(response)
    }

    const handleFacebookSignup = response => {
        facebookSignup(response)
    }

    const handleSocialSignupFailure = error => {
        if (error) {
            NotificationManager.error(error, 'Signup Error', 5000)
            flushUserState()
        }
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
                            onLoginSuccess={handleGoogleSignup}
                            onLoginFailure={handleSocialSignupFailure}
                        >
                            <div className={`Google-log input-btn`}>
                                <img src={GoogleIcon} alt={`Google Icon`} />
                                <span>Sign up with Google</span>
                            </div>
                        </SocialButton>

                        <SocialButton
                            provider="facebook"
                            appId="156007886613791"
                            onLoginSuccess={handleFacebookSignup}
                            onLoginFailure={handleSocialSignupFailure}
                        >
                            <div className={`Facebook-log input-btn`}>
                                <img src={FacebookIcon} alt={`Facebook Icon`} />
                                <span>Sign up with Facebook</span>
                            </div>
                        </SocialButton>

                        <SignupLoginButton
                            type='Sign up'
                            image={AppleIcon}
                            social={'Apple'}
                            link='www.apple.com'
                        />
                        <p className="or-text">Or</p>
                        {
                            !signWithEmail ? (
                                <div className="form-group">
                                    <div
                                        onClick={e => setSignWithEmail(previousState => !previousState)}
                                        className="email-log input-btn"
                                    >
                                        <img src={MailIcon} alt='Mail Icon' />
                                        <span>Sign up with Email</span>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="input-text"
                                            value={fullname}
                                            onChange={e => setFullName(e.target.value)}
                                        />
                                        <label className="input-label-txt">
                                            Full Name
                                        </label>
                                    </div>
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
                                        <PasswordStrengthBar 
                                            password={password} 
                                            minLength={8}
                                        />
                                    </div>
                                    <div className="form-group">

                                        <button
                                            type="button"
                                            className="input-submit"
                                            onClick={handleSignup}
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </>
                            )
                        }
                    </form>
                    <p className="already-acc">
                        Already have an account? {' '}
                        <Link to="/login">Log in</Link>
                    </p>
                    <p className="terms-text">
                        By signing up, you agree to our {' '}
                        <Link to="#">Terms</Link> {' '}
                        and that you have read our {' '}
                        <Link to="#">Privacy Policy</Link>.</p>
                </div>
            </div>
            <NotificationContainer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        message: state.user.message,
        loading: state.user.loading,
        error: state.user.error,
        userTokens: state.auth.tokens
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: requestBody => dispatch(ActionCreators.signup(requestBody)),
        googleSignup: requestBody => dispatch(ActionCreators.googleSignup(requestBody)),
        facebookSignup: requestBody => dispatch(ActionCreators.facebookSignup(requestBody)),
        flushUserState: () => dispatch(ActionCreators.flushUserState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

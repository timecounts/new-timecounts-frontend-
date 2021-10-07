import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import * as ActionCreators from '../../../application/actions'
import { connect } from 'react-redux'
import SignupLoginButton from '../../components/SignupLoginButton'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import GoogleIcon from '../../assets/images/icon-google.svg'
import FacebookIcon from '../../assets/images/icon-fb-colorful.svg'
import AppleIcon from '../../assets/images/icon-apple.svg'
import MailIcon from '../../assets/images/icon-mail.svg'

const SignUp = ({ signup, message, loading, error }) => {

    const history = useHistory()
    const [signWithEmail, setSignWithEmail] = useState(false)
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSignup = async e => {
        e.preventDefault()

        if (email !== '' && fullname !== '' && password !== '') {
            try {
                const sanitizedFullname = await yup.string().validate(fullname)
                const sanitizedEmail = await yup.string().email().validate(email)
                const sanitizedPassword = await yup.string().validate(password)

                await signup({
                    fullName: sanitizedFullname,
                    email: sanitizedEmail,
                    password: sanitizedPassword
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        console.log(message)
        if (message.data === 'User created successfully.') {
            history.push('/login')
        }
    }, [message, loading, error])

    return (
        <div className="signup-wrapper">
            <div className="container">
                <div className="sw-content">
                    <h1>Join Timecounts</h1>
                    <form>
                        <SignupLoginButton 
                            type='Sign up'
                            image={GoogleIcon}
                            social={'Google'}
                            link='www.google.com'
                        />
                        <SignupLoginButton
                            type='Sign up'
                            image={FacebookIcon}
                            social={'Facebook'}
                            link='www.facebook.com'
                        />
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
                                                alignItems: "center"
                                            }}
                                        >
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                style={{
                                                    flex: "1",
                                                    border: "none",
                                                    outlineWidth: "0"
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
                        <Link to="#">Log in</Link>
                    </p>
                    <p className="terms-text">
                        By signing up, you agree to our {' '}
                        <Link to="#">Terms</Link> {' '}
                        and that you have read our {' '}
                        <Link to="#">Privacy Policy</Link>.</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        message: state.user.message,
        loading: state.user.loading,
        error: state.user.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: requestBody => dispatch(ActionCreators.signup(requestBody))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

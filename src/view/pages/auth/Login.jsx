import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as ActionCreators from '../../../application/actions'
import * as yup from 'yup'
import SignupLoginButton from '../../components/SignupLoginButton'
import IconButton from '@mui/material/IconButton'

import GoogleIcon from '../../assets/images/icon-google.svg'
import FacebookIcon from '../../assets/images/icon-fb-colorful.svg'
import AppleIcon from '../../assets/images/icon-apple.svg'
import MailIcon from '../../assets/images/icon-mail.svg'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const Login = ({ login, googleLogin, facebookLogin, userTokens, loading, error }) => {

    const [signWithEmail, setSignWithEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [tokens, setTokens] = useState({})

    useEffect(() => {
        setTokens({
            accessToken: userTokens.accessToken,
            refreshToken: userTokens.refreshToken
        })
    }, [userTokens])

    useEffect(() => {
        if (error !== '') {
            console.log('Login: ', error, error.message)
        }
    }, [error])

    useEffect(() => {
        console.log('Tokens: ', tokens)
    }, [tokens])

    const handleLogin = e => {
        e.preventDefault()

        yup.string().email().validate(email).then(sanitizedEmail =>{
            yup.string().validate(password).then(sanitizedPassword => {
                login({
                    email: sanitizedEmail,
                    password: sanitizedPassword
                })
            }).catch(error => {
                alert('Enter valid Password Input.', error.message)
            })
        }).catch(error => {
            alert('Enter valid Email Input.', error.message)
        })
    }

    const handleGoogleLogin = e => {
        e.preventDefault()

        googleLogin()
    }

    const handleFacebookLogin = e => {
        e.preventDefault()

        facebookLogin()
    }

    return (
        <div className="signup-wrapper">
            <div className="container">
                <div className="sw-content">
                    <h1>Log in</h1>
                    <form>
                        <SignupLoginButton
                            image={GoogleIcon}
                            social={'Google'}
                            handler={handleGoogleLogin}
                        />
                        <SignupLoginButton
                            image={FacebookIcon}
                            social={'Facebook'}
                            handler={handleFacebookLogin}
                        />
                        <SignupLoginButton
                            image={AppleIcon}
                            social={'Apple'}
                        />
                        <p className="or-text">Or</p>
                        {
                            !signWithEmail ? (
                                <div className="form-group" onClick={() => setSignWithEmail(true)}>
                                    <Link to='#' className="email-log input-btn">
                                        <img src={MailIcon} alt='mail icon' />
                                        <span>Log in with Email</span>
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
                                        <label className="input-label-txt">Email</label>
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
                        <Link to="">Sign up</Link>
                    </p>
                    <p className="terms-text">
                        By signing up, you agree to our {' '}
                        <Link to="">Terms</Link> {' '}
                        and that you have read our {' '}
                        <Link>Privacy Policy</Link>.
                    </p>
                </div>
            </div >
        </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)

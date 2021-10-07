import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import SignupLoginButton from '../../components/SignupLoginButton'

import GoogleIcon from '../../assets/images/icon-google.svg'
import FacebookIcon from '../../assets/images/icon-fb-colorful.svg'
import AppleIcon from '../../assets/images/icon-apple.svg'
import MailIcon from '../../assets/images/icon-mail.svg'

const SignUp = () => {

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

    return (
        <div className="signup-wrapper">
            <div className="container">
                <div className="sw-content">
                    <h1>Join Timecounts</h1>
                    <form>
                        <SignupLoginButton 
                            image={GoogleIcon}
                            social={'Google'}
                            link='www.google.com'
                        />
                        <SignupLoginButton
                            image={FacebookIcon}
                            social={'Facebook'}
                            link='www.facebook.com'
                        />
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

export default SignUp

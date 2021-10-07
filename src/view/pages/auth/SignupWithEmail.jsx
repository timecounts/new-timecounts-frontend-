import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const SignupWithEmail = () => {

    const params = useParams()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        setEmail(params.id)
    }, [])

    return (
        <div className="signup-wrapper">
            <div className="container">
                <div className="sw-content">
                    <h1>Join Timecounts</h1>
                    <form>
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
                                    padding: "5 15"
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
                            >
                                Sign Up
                            </button>
                        </div>

                    </form>
                    <p className="already-acc">
                        Already have an account? {' '}
                        <Link to='#'>Log in</Link>
                    </p>
                    <p className="terms-text">
                        By signing up, you agree to our {' '}
                        <Link to='#'>Terms</Link> {' '}
                        and that you have read our {' '}
                        <Link to='#'>Privacy Policy</Link>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignupWithEmail

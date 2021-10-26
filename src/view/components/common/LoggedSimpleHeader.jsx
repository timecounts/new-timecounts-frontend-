import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from "@mui/material/Avatar"
import stringAvatar from '../../utils/stringAvatar'
import * as ActionCreators from '../../../application/actions'
import { NotificationContainer, NotificationManager } from 'react-notifications'

import Logo from '../../assets/images/company-logo.svg'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

const LoggedSimpleHeader = ({ tokens, logout }) => {

    const [showDropdown, setShowDropdown] = useState(false)

    const handleLogout = async e => {
        e.preventDefault()
        await logout({
            refreshToken: tokens.refreshToken
        })
    }

    return <div className="header-wrap">
        <div className="header">
            <nav>
                <img
                    src={Logo}
                    alt="Company Logo"
                />
                <div className="profile-info" onClick={() => setShowDropdown(previousState => !previousState)}>
                    {
                        tokens.userData.pictureUrl ? (
                            <Avatar src={tokens.userData.pictureUrl} />
                        ) : (
                            <Avatar {...stringAvatar(tokens.userData.username)} />
                        )
                    }
                </div>
                <div className={`profile-dropdown ${showDropdown && 'active'}`}>
                    <div className="row">
                        <div className="col-md-3">
                            <span className="pd-wrapper">
                                <img src="images/T.png" />
                            </span>
                        </div>
                        <div className="col-md-9">
                            <span className="pd-heading">My Private Org</span>
                            <span className="pd-text">Switch to Another Organization</span>
                        </div>
                    </div>
                    <ul>
                        <li 
                            style={{
                                cursor: 'pointer'
                            }}
                        >
                            <Link 
                                to="/organization/creation" 
                                style={{ 
                                    display: 'flex', 
                                    alignItems: 'center' 
                                }}
                            >
                                <AddOutlinedIcon />
                                Create Link New Organization
                            </Link>
                        </li>
                        <li
                            style={{
                                cursor: 'pointer'
                            }}
                        >
                            <Link to="#">Edit Profile</Link>
                        </li>
                        <li
                            style={{
                                cursor: 'pointer'
                            }}
                        >
                            <Link to="#">Help Center</Link>
                        </li>
                        <li 
                            onClick={handleLogout}
                            style={{
                                cursor: 'pointer'
                            }}
                        >
                            <Link to="#">Sign Out</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <NotificationContainer />
    </div>
}

const mapStateToProps = state => {
    return {
        tokens: state.auth.tokens
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: requestBody => dispatch(ActionCreators.logout(requestBody)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedSimpleHeader)

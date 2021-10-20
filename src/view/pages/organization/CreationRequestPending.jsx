import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import stringAvatar from '../../utils/stringAvatar'

import Logo from '../../assets/images/company.svg'

const CreationRequestPending = ({ username, email }) => {
    return <div className="site-wrap">
        <div className="header-wrap">
            <div className="header">
                <nav>
                    <img src={Logo} />
                    <div className ="profile-info">
                        <Avatar {...stringAvatar(username)} />
                    </div>
                </nav>
            </div>
        </div>
        <div className="site-container">
            <div className="container">
                <div className="step-form">
                    <div className="modal-wrap">
                        <div className="modal-bodies">
                            <div className="modal-body modal-body-step-5 is-showing">
                                <div className="description">You are almost there</div>
                                <div className="text-center">
                                    <p className="eamil-sent-text">Your request to create a new organization is pending approval. You should
                                        shortly receive a confirmation on email <span><a href=""
                                            className="email-link">{email}</a></span></p>
                                    <div className="button">Back to Dashbaord</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        username: state.auth.tokens.userData.username,
        email: state.auth.tokens.userData.email
    }
}

export default connect(mapStateToProps)(CreationRequestPending)

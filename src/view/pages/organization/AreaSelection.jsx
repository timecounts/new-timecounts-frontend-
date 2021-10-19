import { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import stringAvatar from '../../utils/stringAvatar'
import { NotificationContainer, NotificationManager } from 'react-notifications'

import Logo from '../../assets/images/company.svg'

const AreaSelection = ({ username }) => {

    const history = useHistory()
    const [notSelectedList, setNotSelectedList] = useState([
        {
            id: 1,
            area: 'Cinematography'
        }, {
            id: 2,
            area: 'Food'
        }, {
            id: 3,
            area: 'Animals'
        }, {
            id: 4,
            area: 'Arts and Culture'
        }, {
            id: 5,
            area: 'Children and Youth'
        }, {
            id: 6,
            area: 'Community'
        }
    ])

    return <div className="site-wrap">
        <div className="header-wrap">
            <div className="header">
                <nav>
                    <img src={Logo} />
                    <div className="profile-info">
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
                            <div className="modal-body modal-body-step-3 is-showing">
                                <div className="title">Step 3 of 4</div>
                                <div className="description">What areas of focus best describe your organization?</div>
                                <form>
                                    <div className="step-3">
                                        <form>
                                            <div className="select-box">
                                                <div className="add-form-control">
                                                    <input 
                                                        type="text" 
                                                        className="form-text" 
                                                        placeholder=" Search for a activity"
                                                    />
                                                </div>
                                                <div className="add-tag">
                                                    <ul>
                                                        {
                                                            notSelectedList.map(area => (
                                                                <li 
                                                                    key={area.id}
                                                                >
                                                                    {area.area}
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <p>Pick some options from above or search for needed ones.</p>
                                            </div>
                                            <div className="add-focus-select">
                                                <h2>The areas of focus for Test Organization:</h2>
                                                <div className="focus-tag">
                                                    <ul>
                                                        <li>Animals</li>
                                                        <li>Arts and Culture</li>
                                                        <li>Children and Youth</li>
                                                        <li>Community</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="button-wrap fade-in">
                                        <div className=" button-alt" onClick={() => history.goBack()}>Back</div>
                                        <div className="button">Next step</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NotificationContainer />
    </div>
}

const mapStateToProps = state => {
    return {
        username: state.auth.tokens.userData.username
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaSelection)

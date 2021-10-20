import { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import stringAvatar from '../../utils/stringAvatar'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import * as ActionCreators from '../../../application/actions'

import Logo from '../../assets/images/company.svg'

const GoalSelection = ({ username, organizationDataStep4 }) => {

    const history = useHistory()
    const [selectedList, setSelectedList] = useState([])

    const handleClick = e => {
        e.preventDefault()

        if (e.target.innerText === 'Create Reports') {
            if (selectedList.filter(item => item === 'CREATE_REPORTS').length !== 0) {
                setSelectedList(selectedList.filter(item => item !== 'CREATE_REPORTS'))
            } else {
                setSelectedList([...selectedList, 'CREATE_REPORTS'])
            }
        } else if (e.target.innerText === 'Track Volunteer Time') {
            if (selectedList.filter(item => item === 'TRACK_VOLUNTEER_TIME').length !== 0) {
                setSelectedList(selectedList.filter(item => item !== 'TRACK_VOLUNTEER_TIME'))
            } else {
                setSelectedList([...selectedList, 'TRACK_VOLUNTEER_TIME'])
            }
        } else if (e.target.innerText === 'Manage a Volunteer Database') {
            if (selectedList.filter(item => item === 'MANAGE_A_VOLUNTEER_DATABASE').length !== 0) {
                setSelectedList(selectedList.filter(item => item !== 'MANAGE_A_VOLUNTEER_DATABASE'))
            } else {
                setSelectedList([...selectedList, 'MANAGE_A_VOLUNTEER_DATABASE'])
            }
        } else if (e.target.innerText === 'Customize Signup Forms') {
            if (selectedList.filter(item => item === 'CUSTOMIZE_SIGNUP_FORMS').length !== 0) {
                setSelectedList(selectedList.filter(item => item !== 'CUSTOMIZE_SIGNUP_FORMS'))
            } else {
                setSelectedList([...selectedList, 'CUSTOMIZE_SIGNUP_FORMS'])
            }
        } else if (e.target.innerText === 'Communicate with Volunteers') {
            if (selectedList.filter(item => item === 'COMMUNICATION_WITH_VOLUNTEERS').length !== 0) {
                setSelectedList(selectedList.filter(item => item !== 'COMMUNICATION_WITH_VOLUNTEERS'))
            } else {
                setSelectedList([...selectedList, 'COMMUNICATION_WITH_VOLUNTEERS'])
            }
        } else if (e.target.innerText === 'Create Applications') {
            if (selectedList.filter(item => item === 'CREATE_APPLICATIONS').length !== 0) {
                setSelectedList(selectedList.filter(item => item !== 'CREATE_APPLICATIONS'))
            } else {
                setSelectedList([...selectedList, 'CREATE_APPLICATIONS'])
            }
        } else if (e.target.innerText === 'Create Volunteer Events') {
            if (selectedList.filter(item => item === 'CREATE_VOLUNTEER_EVENTS').length !== 0) {
                setSelectedList(selectedList.filter(item => item !== 'CREATE_VOLUNTEER_EVENTS'))
            } else {
                setSelectedList([...selectedList, 'CREATE_VOLUNTEER_EVENTS'])
            }
        } else if (e.target.innerText === 'Publish Ongoing Schedules') {
            if (selectedList.filter(item => item === 'PUBLISH_ONGOING_SCHEDULES').length !== 0) {
                setSelectedList(selectedList.filter(item => item !== 'PUBLISH_ONGOING_SCHEDULES'))
            } else {
                setSelectedList([...selectedList, 'PUBLISH_ONGOING_SCHEDULES'])
            }
        }
    }

    const handleNextStep = e => {
        e.preventDefault()

        if (selectedList.length !== 0) {
            organizationDataStep4(selectedList)
            history.push('/organization/pending-creation')
        } else {
            NotificationManager.error('You must select atleast one Goal', 'Selection Error', 5000)
        }
    }

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
                            <div className="modal-body modal-body-step-4 is-showing">
                                <div className="title">Step 4 of 4</div>
                                <div className="description">What would you like to do in Timecounts?</div>
                                <form>
                                    <div className="step-3">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'CREATE_REPORTS').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    {/* <img src="images/icon.jpg"> */}
                                                    <span>Create Reports</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'TRACK_VOLUNTEER_TIME').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    {/* <img src="images/icon.jpg"> */}
                                                    <span>Track Volunteer Time</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'MANAGE_A_VOLUNTEER_DATABASE').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    {/* <img src="images/icon.jpg"> */}
                                                    <span>Manage a Volunteer Database</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'CUSTOMIZE_SIGNUP_FORMS').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    {/* <img src="images/icon.jpg"> */}
                                                    <span>Customize Signup Forms</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'COMMUNICATION_WITH_VOLUNTEERS').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    {/* <img src="images/icon.jpg"> */}
                                                    <span>Communicate with Volunteers</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'CREATE_APPLICATIONS').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    {/* <img src="images/icon.jpg"> */}
                                                    <span>Create Applications</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'CREATE_VOLUNTEER_EVENTS').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    {/* <img src="images/icon.jpg"> */}
                                                    <span>Create Volunteer Events</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'PUBLISH_ONGOING_SCHEDULES').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    {/* <img src="images/icon.jpg"> */}
                                                    <span>Publish Ongoing Schedules</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-wrap fade-in">
                                        <div className=" button-alt" onClick={() => history.goBack()}>Back</div>
                                        <div className="button"  onClick={handleNextStep}>Next step</div>
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
        organizationDataStep4: data => dispatch(ActionCreators.organizationDataStep4(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalSelection)

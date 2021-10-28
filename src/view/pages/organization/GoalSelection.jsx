import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import * as ActionCreators from '../../../application/actions'
import LoggedSimpleHeader from '../../components/common/LoggedSimpleHeader'

import CreateReportsIcon from '../../assets/images/svg/illustrations/monthly-reporting.svg'
import TrackVolunteerTimeIcon from '../../assets/images/svg/illustrations/credit-report.svg'
import ManageAVolunteerDatabaseIcon from '../../assets/images/svg/illustrations/top-people.svg'
import CustomizeSignupFormsIcon from '../../assets/images/svg/illustrations/assignment-report.svg'
import CommunicateWithVolunteersIcon from '../../assets/images/svg/illustrations/engagement.svg'
import CreateVolunteerEventsIcon from '../../assets/images/svg/illustrations/attendance.svg'
import PublishOngoingSchedulesIcon from '../../assets/images/svg/illustrations/create-event.svg'
import CreateApplicationsIcon from '../../assets/images/svg/illustrations/applications.svg'

const GoalSelection = ({
    dataOrganizationName,
    dataPublicUrl,
    dataCategory,
    dataAreas,
    dataGoals,
    loading, 
    successMessage,
    error,
    organizationDataStep4,
    organizationCreation,
    flushOrganizationState,
    logoutLoading,
    logoutSuccess,
    logoutError,
    flushAuthState
}) => {

    const history = useHistory()
    const [selectedList, setSelectedList] = useState(dataGoals.length === 0 ? [] : dataGoals)

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

        if (
            selectedList.length !== 0 &&
            dataOrganizationName !== '' &&
            dataPublicUrl.length > 27 &&
            dataCategory.length !== 0 &&
            dataAreas.length !== 0
        ) {
            organizationDataStep4(selectedList)

            organizationCreation({
                organizationName: dataOrganizationName,
                publicUrl: dataPublicUrl,
                category: dataCategory,
                areas: dataAreas,
                goals: selectedList
            })
        } else if (dataOrganizationName === '' && dataPublicUrl.length > 27) {
            history.push('/organization/creation')
        } else if (dataCategory === '') {
            history.push('/organization/category')
        } else if (dataAreas.length === 0) {
            history.push('/organization/area')
        } else if (selectedList.length === 0) {
            NotificationManager.error('You must select atleast one Goal', 'Selection Error', 5000)
        }
    }

    useEffect(() => {
        if (logoutError) {
            NotificationManager.error(logoutError, 'Logout Error', 5000)
            flushAuthState()
        }
    }, [logoutError])

    useEffect(() => {
        if (logoutSuccess === 'User Successfully logged out.') {
            flushAuthState()
            history.push('/login')
        }
    }, [logoutSuccess])

    useEffect(() => {
        if (successMessage.data === 'Organization added Successfully.') {
            flushOrganizationState()
            history.push('/organization/pending-creation')
        }
    }, [successMessage])

    useEffect(() => {
        if (error !== '') {
            NotificationManager.error(error, 'Organization Registration Error', 5000)
            flushOrganizationState()
        }
    }, [error])

    return <div className="site-wrap">
        <LoggedSimpleHeader />
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
                                                    <img src={CreateReportsIcon} />
                                                    <span>Create Reports</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'TRACK_VOLUNTEER_TIME').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    <img src={TrackVolunteerTimeIcon} />
                                                    <span>Track Volunteer Time</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'MANAGE_A_VOLUNTEER_DATABASE').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    <img src={ManageAVolunteerDatabaseIcon} />
                                                    <span>Manage a Volunteer Database</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'CUSTOMIZE_SIGNUP_FORMS').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    <img src={CustomizeSignupFormsIcon} />
                                                    <span>Customize Signup Forms</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'COMMUNICATION_WITH_VOLUNTEERS').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    <img src={CommunicateWithVolunteersIcon} />
                                                    <span>Communicate with Volunteers</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'CREATE_APPLICATIONS').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    <img src={CreateApplicationsIcon} />
                                                    <span>Create Applications</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'CREATE_VOLUNTEER_EVENTS').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    <img src={CreateVolunteerEventsIcon} />
                                                    <span>Create Volunteer Events</span>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div
                                                    className={`select-wrap ${selectedList.filter(item => item === 'PUBLISH_ONGOING_SCHEDULES').length !== 0 && 'active'}`}
                                                    onClick={handleClick}
                                                >
                                                    <img src={PublishOngoingSchedulesIcon} />
                                                    <span>Publish Ongoing Schedules</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-wrap fade-in">
                                        <div 
                                            className="button-alt" 
                                            onClick={() => history.goBack()}
                                            style={{textTransform: 'none'}}
                                        >
                                            Back
                                        </div>
                                        <div 
                                            className="button" 
                                            onClick={handleNextStep}
                                            style={{textTransform: 'none'}}
                                        >
                                            Next Step
                                        </div>
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
        dataOrganizationName: state.organization.dataOrganizationName,
        dataPublicUrl: state.organization.dataPublicUrl,
        dataCategory: state.organization.dataCategory,
        dataAreas: state.organization.dataAreas,
        dataGoals: state.organization.dataGoals,
        loading: state.organization.loading,
        successMessage: state.organization.successMessage,
        error: state.organization.error,
        logoutLoading: state.auth.loading,
        logoutSuccess: state.auth.logoutSuccess,
        logoutError: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        organizationDataStep4: data => dispatch(ActionCreators.organizationDataStep4(data)),
        flushOrganizationState: () => dispatch(ActionCreators.flushOrganizationState()),
        organizationCreation: requestbody => dispatch(ActionCreators.organizationCreation(requestbody)),
        flushAuthState: () => dispatch(ActionCreators.flushAuthState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalSelection)

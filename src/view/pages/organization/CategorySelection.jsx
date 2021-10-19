import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import stringAvatar from '../../utils/stringAvatar'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as ActionCreators from '../../../application/actions'
import { NotificationContainer, NotificationManager } from 'react-notifications'

import Logo from '../../assets/images/company.svg'

const CategorySelection = ({ username, organizationDataStep2 }) => {

    const history = useHistory()
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleNextStep = e => {
        e.preventDefault()

        if (selectedCategory !== '') {
            organizationDataStep2(selectedCategory)
            history.push('/organization/area')
        } else {
            NotificationManager.error('Select a Category to proceed for next step.', 'Selection Error', 5000)
        }
    }

    return <div className="site-wrap">
        <div className="header-wrap">
            <div className="header">
                <nav>
                    <img
                        src={Logo}
                        alt="Timecount Logo"
                    />
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
                            <div className="modal-body modal-body-step-2 is-showing">
                                <div className="title">Step 2 of 4</div>
                                <div className="description">Which category does your organization fit into?</div>
                                <form>
                                    <div className="step-2">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <button
                                                    className={`select-category ${selectedCategory === 'nonprofit' && 'active'}`}
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setSelectedCategory('nonprofit')
                                                    }}
                                                >
                                                    Nonprofit
                                                </button>
                                            </div>
                                            <div className="col-md-6">
                                                <button
                                                    className={`select-category ${selectedCategory === 'community group' && 'active'}`}
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setSelectedCategory('community group')
                                                    }}
                                                >
                                                    Community Group
                                                </button>
                                            </div>
                                            <div className="col-md-6">
                                                <button
                                                    className={`select-category ${selectedCategory === 'event/festival' && 'active'}`}
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setSelectedCategory('event/festival')
                                                    }}
                                                >
                                                    Event / Festival
                                                </button>
                                            </div>
                                            <div className="col-md-6">
                                                <button
                                                    className={`select-category ${selectedCategory === 'company' && 'active'}`}
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setSelectedCategory('company')
                                                    }}
                                                >
                                                    Company
                                                </button>
                                            </div>
                                            <div className="col-md-6">
                                                <button
                                                    className={`select-category ${selectedCategory === 'vaccination site' && 'active'}`}
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setSelectedCategory('vaccination site')
                                                    }}
                                                >
                                                    Vaccination Site
                                                </button>
                                            </div>
                                            <div className="col-md-6">
                                                <button
                                                    className={`select-category ${selectedCategory === 'school' && 'active'}`}
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setSelectedCategory('school')
                                                    }}
                                                >
                                                    School
                                                </button>
                                            </div>
                                            <div className="col-md-6">
                                                <button
                                                    className={`select-category ${selectedCategory === 'government/civic' && 'active'}`}
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setSelectedCategory('government/civic')
                                                    }}
                                                >
                                                    Government / Civic
                                                </button>
                                            </div>
                                            <div className="col-md-6">
                                                <button
                                                    className={`select-category ${selectedCategory === 'own' && 'active'}`}
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setSelectedCategory('own')
                                                    }}
                                                >
                                                    Doing my own thing
                                                </button>
                                            </div>
                                            <div className="col-md-6">
                                                <button
                                                    className={`select-category ${selectedCategory === 'church/spiritual group' && 'active'}`}
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setSelectedCategory('church/spiritual group')
                                                    }}
                                                >
                                                    Church / Spiritual Group
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="button-wrap fade-in">
                                        <div className=" button-alt" onClick={() => history.goBack()}>Back</div>
                                        <div className="button" onClick={handleNextStep}>Next step</div>
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
        organizationDataStep2: data => dispatch(ActionCreators.organizationDataStep2(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelection)

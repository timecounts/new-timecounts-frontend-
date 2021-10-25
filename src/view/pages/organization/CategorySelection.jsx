import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as ActionCreators from '../../../application/actions'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import LoggedSimpleHeader from '../../components/common/LoggedSimpleHeader'

const CategorySelection = ({ 
    dataCategory, 
    organizationDataStep2,
    logoutLoading,
    logoutSuccess,
    logoutError,
    flushAuthState
}) => {

    const history = useHistory()
    const [selectedCategory, setSelectedCategory] = useState(dataCategory.length === 0 ? '' : dataCategory)

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
        <LoggedSimpleHeader />
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
                                        <div 
                                            className=" button-alt" 
                                            onClick={() => history.goBack()}
                                            style={{
                                                textTransform: 'none'
                                            }}
                                        >
                                            Back
                                        </div>
                                        <div 
                                            className="button" 
                                            onClick={handleNextStep}
                                            style={{
                                                textTransform: 'none'
                                            }}
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
        dataCategory: state.organization.dataCategory,
        logoutLoading: state.auth.loading,
        logoutSuccess: state.auth.logoutSuccess,
        logoutError: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        organizationDataStep2: data => dispatch(ActionCreators.organizationDataStep2(data)),
        flushAuthState: () => dispatch(ActionCreators.flushAuthState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelection)

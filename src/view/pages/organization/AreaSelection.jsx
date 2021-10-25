import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import * as ActionCreators from '../../../application/actions'
import LoggedSimpleHeader from '../../components/common/LoggedSimpleHeader'

const AreaSelection = ({
    dataAreas, 
    organizationDataStep3,
    logoutLoading,
    logoutSuccess,
    logoutError,
    flushAuthState
}) => {

    const history = useHistory()
    const [notSelectedList, setNotSelectedList] = useState([
        'Cinematography',
        'Food',
        'Animals',
        'Arts and Culture',
        'Children and Youth',
        'Community'
    ])
    const [selectedList, setSelectedList] = useState(dataAreas.length === 0 ? [] : dataAreas)

    const handleNextStep = e => {
        e.preventDefault()

        if (selectedList.length !== 0) {
            organizationDataStep3(selectedList)
            history.push('/organization/goal')
        } else {
            NotificationManager.error('You must select atleast one area.', 'Selection Warning', 5000)
        }
    }

    useEffect(() => {
        const newNotSelectedList = notSelectedList.filter(i => !selectedList.includes(i))
        setNotSelectedList(newNotSelectedList)
    }, [])

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

    return <div className="site-wrap">
        <LoggedSimpleHeader />
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
                                                            notSelectedList.map((area, index) => (
                                                                <li 
                                                                    key={index}
                                                                    style={{
                                                                        margin: '5px',
                                                                        cursor: 'pointer'
                                                                    }}
                                                                    onClick={e => {
                                                                        setNotSelectedList(notSelectedList.filter((a, i) => i !== index))
                                                                        setSelectedList([...selectedList, area])
                                                                    }}
                                                                >
                                                                    {area}
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
                                                        {
                                                            selectedList.map((area, index) => (
                                                                <li
                                                                    key={index}
                                                                    style={{
                                                                        margin: '5px',
                                                                        cursor: 'pointer'
                                                                    }}
                                                                    onClick={e => {
                                                                        setSelectedList(selectedList.filter((a, i) => i !== index))
                                                                        setNotSelectedList([...notSelectedList, area])
                                                                    }}
                                                                >
                                                                    {area}
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="button-wrap fade-in">
                                        <div 
                                            className="button-alt" 
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
        dataAreas: state.organization.dataAreas,
        logoutLoading: state.auth.loading,
        logoutSuccess: state.auth.logoutSuccess,
        logoutError: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        organizationDataStep3: data => dispatch(ActionCreators.organizationDataStep3(data)),
        flushAuthState: () => dispatch(ActionCreators.flushAuthState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaSelection)

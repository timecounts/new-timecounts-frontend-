import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import * as ActionCreators from '../../../application/actions'
import LoggedSimpleHeader from '../../components/common/LoggedSimpleHeader'
import areas from '../../utils/organization_areas'

const AreaSelection = ({
    dataAreas, 
    organizationDataStep3,
    logoutLoading,
    logoutSuccess,
    logoutError,
    flushAuthState
}) => {

    const [actualAreaList, setActualAreaList] = useState(areas)
    const history = useHistory()
    const [search, setSearch] = useState('')
    const [notSelectedList, setNotSelectedList] = useState(areas.slice(1, 9))
    const [selectedList, setSelectedList] = useState(dataAreas.length === 0 ? [] : dataAreas)

    const handleNextStep = e => {
        e.preventDefault()

        if (selectedList.length !== 0) {
            const list = selectedList.map(item => item.item)
            organizationDataStep3(list)
            history.push('/organization/goal')
        } else {
            NotificationManager.error('You must select atleast one area.', 'Selection Warning', 5000)
        }
    }

    useEffect(() => {
        console.log(selectedList)
    }, [selectedList])

    useEffect(() => {
        if (search.length > 1) {
            setNotSelectedList(actualAreaList
                .filter(item => item.text.toLowerCase().match(search.toLowerCase())))
        }
    }, [search])

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
                                                        value={search}
                                                        onChange={e => setSearch(e.target.value)}
                                                        placeholder=" Search for a activity"
                                                    />
                                                </div>
                                                <div className="add-tag">
                                                    <ul>
                                                        {
                                                            notSelectedList.map(area => (
                                                                <li 
                                                                    key={area.value}
                                                                    style={{
                                                                        margin: '5px',
                                                                        cursor: 'pointer'
                                                                    }}
                                                                    onClick={e => {
                                                                        setActualAreaList(actualAreaList.filter(a => a.item !== area.item))
                                                                        setNotSelectedList(notSelectedList.filter(a => a.item !== area.item))
                                                                        setSelectedList([...selectedList, area])
                                                                    }}
                                                                >
                                                                    {area.text}
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
                                                            selectedList.map(area => (
                                                                <li
                                                                    key={area.value}
                                                                    style={{
                                                                        margin: '5px',
                                                                        cursor: 'pointer'
                                                                    }}
                                                                    onClick={e => {
                                                                        setSelectedList(selectedList.filter(a => a.item !== area.item))
                                                                        setNotSelectedList([...notSelectedList, area])
                                                                        setActualAreaList([...actualAreaList, area])
                                                                    }}
                                                                >
                                                                    {area.text}
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

import { useState, useEffect } from "react"
import Avatar from "@mui/material/Avatar"
import stringAvatar from '../../utils/stringAvatar'
import { connect } from 'react-redux'
import * as ActionCreators from '../../../application/actions'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'

import Logo from '../../assets/images/company.svg'

const OrganizationCreation = ({
    tokens,
    successMessage,
    loading,
    error,
    organizationDataStep1,
    organizationUrlExist,
    flushOrganizationState,
    dataOrganizationName,
    dataPublicUrl
}) => {

    const history = useHistory()
    const [organizationName, setOrganizationName] = useState(dataOrganizationName)
    const [publicUrl, setPublicUrl] = useState(dataPublicUrl.length === 0 ? 'https://timecounts.org/' : dataPublicUrl)
    const [urlExist, setUrlExist] = useState(false)

    useEffect(() => {
        if (successMessage?.data === 'Public Url is available to use.') {
            flushOrganizationState()
            history.push('/organization/category')
        }
    }, [successMessage])

    useEffect(() => {
        if (error !== '') {
            if (error) NotificationManager.error(error, 'URL Check Error', 5000)
            if (error.includes('already exists.')) setUrlExist(true)
            flushOrganizationState()
        }
    }, [error])

    const handleClick = async e => {
        e.preventDefault()

        if (organizationName !== '' && publicUrl.length > 26) {
            try {
                const sanitizedOrganizationName = await yup
                    .string()
                    .validate(organizationName)

                const sanitizedPublicUrl = await yup
                    .string()
                    .url('Public Url must ba a valid URL.')
                    .validate(publicUrl)


                const requestBody = {
                    publicUrl: sanitizedPublicUrl
                }

                await organizationUrlExist(requestBody)

                if (sanitizedOrganizationName && sanitizedPublicUrl) {
                    organizationDataStep1({
                        organizationName: sanitizedOrganizationName,
                        publicUrl: sanitizedPublicUrl
                    })
                }
            } catch (error) {
                NotificationManager.error(error.message, 'Input Error', 5000)
                flushOrganizationState()
            }
        } else if (organizationName === '') {
            NotificationManager.error('Please enter an Organization Name', 'Input Error', 5000)
        } else if (publicUrl.length < 27) {
            if (publicUrl.length === 23) {
                NotificationManager.error('Please enter a Public URL.', "Input Error", 5000)
            } else {
                NotificationManager.error('Public URL must be longer than 4 characters.', 'Input Error', 5000)
            }
        } else {
            NotificationManager.error('Enter an Organization Name and a Public URL.', 'Input Error', 5000)
        }
    }

    useEffect(() => {
        setUrlExist(false)
    }, [publicUrl])

    useEffect(() => {
        if (publicUrl.length < 23) {
            setPublicUrl('https://timecounts.org/')
        }
    }, [publicUrl])

    return <div className="site-wrap">
        <div className="header-wrap">
            <div className="header">
                <nav>
                    <img
                        src={Logo}
                        alt="Company Logo"
                    />
                    <div className="profile-info">
                        <Avatar {...stringAvatar(tokens.userData.username)} />
                    </div>
                </nav>
            </div>
        </div>
        <div className="site-container">

            <div className="container">
                <div className="step-form">
                    <div className="modal-wrap">

                        <div className="modal-bodies">
                            <div className="modal-body modal-body-step-1 is-showing">
                                <div className="title">Step 1 of 4</div>
                                <div className="description">Let’s get your organization set up on Timecounts</div>

                                <form>
                                    <div className="form-group">
                                        <label className="input-label-txt">Organization Name</label>
                                        <input
                                            type="text"
                                            className="input-text"
                                            value={organizationName}
                                            onChange={e => setOrganizationName(e.target.value)}
                                        />

                                    </div>
                                    <div className="form-group">
                                        <label
                                            className="input-label-txt"
                                        >
                                            Public URL
                                        </label>
                                        <input
                                            type="text"
                                            className="input-text"
                                            placeholder="http://timecounts.org/"
                                            value={publicUrl}
                                            onChange={e => setPublicUrl(e.target.value)}
                                        />
                                        <p className='error'>
                                            {
                                                urlExist && (
                                                    <span>
                                                        SORRY, YOUR PUBLIC URL HAS ALREADY BEEN TAKEN.
                                                    </span>
                                                )
                                            }
                                            This will be the website link for your volunteer hub. Make it a good one, you can’t change it
                                            later.
                                        </p>
                                    </div>

                                    <div className="button-wrap">
                                        <div className="button" onClick={handleClick}>Next Step</div>
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
        tokens: state.auth.tokens,
        successMessage: state.organization.successMessage,
        loading: state.organization.loading,
        error: state.organization.error,
        dataOrganizationName: state.organization.dataOrganizationName,
        dataPublicUrl: state.organization.dataPublicUrl
    }
}

const mapDispatchToProps = dispatch => {
    return {
        organizationDataStep1: data => dispatch(ActionCreators.organizationDataStep1(data)),
        organizationUrlExist: requestBody => dispatch(ActionCreators.organizationUrlExist(requestBody)),
        flushOrganizationState: () => dispatch(ActionCreators.flushOrganizationState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationCreation)
import {
    ORGANIZATION_DATA_STEP1,
    ORGANIZATION_DATA_STEP2,
    ORGANIZATION_DATA_STEP3,
    ORGANIZATION_DATA_STEP4,
    ORGANIZATION_CREATION_REQUEST,
    ORGANIZATION_CREATION_SUCCESS,
    ORGANIZATION_CREATION_FAILURE,
    ORGANIZATION_URL_EXIST_REQUEST,
    ORGANIZATION_URL_EXIST_SUCCESS,
    ORGANIZATION_URL_EXIST_FAILURE,
    FLUSH_ORGANIZATION_STATE_FROM_STATE
} from './actionTypes/organizationType'
import services from '../../infrastructure/services'

// Organization Creation Data
export const organizationDataStep1 = data => {
    return {
        type: ORGANIZATION_DATA_STEP1,
        organizationName: data.organizationName,
        publicUrl: data.publicUrl
    }
}

export const organizationDataStep2 = data => {
    return {
        type: ORGANIZATION_DATA_STEP2,
        payload: data
    }
}

export const organizationDataStep3 = data => {
    return {
        type: ORGANIZATION_DATA_STEP3,
        payload: data
    }
}

export const organizationDataStep4 = data => {
    return {
        type: ORGANIZATION_DATA_STEP4,
        payload: data
    }
}

// Organization Url Exist
export const organizationUrlExistRequest = () => {
    return {
        type: ORGANIZATION_URL_EXIST_REQUEST
    }
}

export const organizationUrlExistSuccess = data => {
    return {
        type: ORGANIZATION_URL_EXIST_SUCCESS,
        payload: data
    }
}

export const organizationURLExistFailure = error => {
    return {
        type: ORGANIZATION_URL_EXIST_FAILURE,
        payload: error
    }
}

export const organizationUrlExist = requestBody => {
    return dispatch => {
        dispatch(organizationUrlExistRequest)
        services
            .organization
            .organizationUrlExist(requestBody)
            .then(response => {
                const data = response.data
                dispatch(organizationUrlExistSuccess(data))
            })
            .catch(error => {
                const errorMessage = error.response.data.message
                dispatch(organizationURLExistFailure(errorMessage))
            })
    }
}

// Organization Creation
export const organizationCreationRequest = () => {
    return {
        type: ORGANIZATION_CREATION_REQUEST
    }
}

export const organizationCreationSuccess = data => {
    return {
        type: ORGANIZATION_CREATION_SUCCESS,
        payload: data
    }
}

export const organizationCreationFailure = error => {
    return {
        type: ORGANIZATION_CREATION_FAILURE,
        payload: error
    }
}

export const organizationCreation = requestBody => {
    return dispatch => {
        dispatch(organizationCreationRequest)
        services
            .organization
            .addOrganization(requestBody)
            .then(response => {
                const data = response.data
                dispatch(organizationCreationSuccess(data))
            })
            .catch(error => {
                const errorMessage = error.response.data.message
                dispatch(organizationCreationFailure(errorMessage))
            })
    }
}

// Flush state
export const flushOrganizationState = () => {
    return {
        type: FLUSH_ORGANIZATION_STATE_FROM_STATE
    }
}

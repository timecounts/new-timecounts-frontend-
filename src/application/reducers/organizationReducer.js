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
} from '../actions/actionTypes/organizationType'

const initialState = {
    dataOrganizationName: '',
    dataPublicUrl: '',
    dataCategory: [],
    dataAreas: [],
    dataGoals: [],
    loading: false,
    successMessage: '',
    error: ''
}

const organizationReducer = (state = initialState, action) => {
    console.log('Organization Reducer: ', action)
    switch (action.type) {
        case ORGANIZATION_DATA_STEP1:
            return {
                ...state,
                dataOrganizationName: action.organizationName,
                dataPublicUrl: action.publicUrl
            }

        case ORGANIZATION_DATA_STEP2:
            return {
                ...state,
                dataCategory: action.payload
            }

        case ORGANIZATION_DATA_STEP3:
            return {
                ...state,
                dataAreas: action.payload
            }

        case ORGANIZATION_DATA_STEP4:
            return {
                ...state,
                dataGoals: action.payload
            }

        case ORGANIZATION_URL_EXIST_REQUEST: 
            return {
                ...state,
                loading: true,
                successMessage: '',
                error: ''
            }

        case ORGANIZATION_URL_EXIST_SUCCESS: 
            return {
                ...state,
                loading: false,
                successMessage: action.payload,
                error: ''
            }

        case ORGANIZATION_URL_EXIST_FAILURE:
            return {
                ...state,
                loading: false,
                successMessage: '',
                error: action.payload
            }

        case ORGANIZATION_CREATION_REQUEST: 
            return {
                ...state,
                loading: true,
                successMessage: '',
                error: ''
            }

        case ORGANIZATION_CREATION_SUCCESS:
            return {
                ...state,
                dataOrganizationName: '',
                dataPublicUrl: '',
                dataCategory: [],
                dataAreas: [],
                dataGoals: [],
                loading: false,
                successMessage: action.payload,
                error: ''
            }

        case ORGANIZATION_CREATION_FAILURE:
            return {
                ...state,
                loading: false,
                successMessage: '',
                error: action.payload
            }

        case FLUSH_ORGANIZATION_STATE_FROM_STATE:
            return {
                ...state,
                loading: false,
                successMessage: '',
                error: ''
            }

        default:
            return state
    }
}

export default organizationReducer

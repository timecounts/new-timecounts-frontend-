import api from '../utils/axios'

const organizationService = {
    addOrganization: payload => api.post('organization/add', payload),
    organizationUrlExist: payload => api.post('organization/url-check', payload)
}

export default organizationService

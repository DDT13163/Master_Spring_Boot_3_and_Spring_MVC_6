import { apiClient } from "../api/ApiClient"

export const executeBasicAuthenticationService
    = (token) => apiClient.get(`basicauth`
        , {
            headers: {
                Authorization: token
            }
        }
    )
import apiClient from "../components/Utils/api-client";

export function getSuggestionsAPI(search){
    return apiClient.get(`/products/suggestions?search=${search}`)
}
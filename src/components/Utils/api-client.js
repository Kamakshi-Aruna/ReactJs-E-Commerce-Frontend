import axios from 'axios';

import config from '../../config.json'

const apiClient = axios.create({
    baseURL: `${config.backendURL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;

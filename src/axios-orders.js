import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://salad-builder.firebaseio.com/'
});

export default instance;
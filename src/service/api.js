import axios from "axios"
axios.defaults.headers.post['Content-Type'] = 'application/json';

class Api {
    getDataWeather(api, data) {
        return axios.post(api, data);
    }
}
export default new Api()
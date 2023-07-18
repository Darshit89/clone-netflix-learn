import axios from "axios";

const instance = axios.create({

    baseURL: "https://api.themoviedb.org/3",
    headers: {
        'Content-Type': 'application/json',
    }
}
);


class AxiosClass {
    async get(url, params) {
        try {

            const response = await instance.get(`${url}${params ? params : ''}`)
            if (response.data) {
                return response.data
            }
        } catch (error) {
            console.log('error: ', error);
            throw error
        }
    }


    async mutation(method = 'post', url, params, data) {
        try {
            const response = await instance({
                method: method,
                url: `${url}${params ? params : ''}`,
                data: data
            })
            if (response.data) {
                return response.data
            }
        } catch (error) {
            console.log('error: ', error);
            throw error
        }
    }

}

export const Axios = new AxiosClass()
export default instance
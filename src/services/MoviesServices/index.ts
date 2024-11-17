import { HttpClient } from "../API/http-client";
import { AxiosInstance } from "axios";


export class MoviesServices {

    private _httpclient: AxiosInstance;
    private path = "trending/movie";

    constructor(httpClient: AxiosInstance) {
        this._httpclient = httpClient;
    }

    async fetchTrending(timePeriod: string = 'day') {
        const response = await this._httpclient.get(this.path + '/' + timePeriod)
        return response.data
    }
}

export default new MoviesServices(HttpClient);
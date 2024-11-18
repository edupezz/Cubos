import { HttpClient } from "../API/http-client";
import { AxiosInstance } from "axios";


export class MoviesServices {

    private _httpclient: AxiosInstance;
    private trendingPath = "trending/movie";
    private searchPath = "search/movie";

    constructor(httpClient: AxiosInstance) {
        this._httpclient = httpClient;
    }

    async fetchTrending(timePeriod: string = 'day') {
        const response = await this._httpclient.get(this.trendingPath + '/' + timePeriod)
        return response.data
    }

    async searchMovie(query: string) {
        const response = await this._httpclient.get(this.searchPath + '/' + query)
        return response.data
    }
}

export default new MoviesServices(HttpClient);
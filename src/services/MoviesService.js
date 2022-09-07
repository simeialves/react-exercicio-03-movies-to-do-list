import axios from "axios";
import { withBaseUrl } from "../utils/api";

export class MoviesService {
	static get() {
		return axios(withBaseUrl("movie/popular"));
	}

	static getById(id) {
		return axios(withBaseUrl(`movie/${id}`));
	}
}
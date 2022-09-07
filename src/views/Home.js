import { useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList";
import { MoviesService } from "../services/MoviesService";

export function Home() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		MoviesService.get().then(({ data: { results } }) => {
			results.push('status: "pending"')
			setMovies(results);
		});
	}, []);

	return (
		<div className="App">
			<MoviesList movies={movies} />
		</div>
	);
}

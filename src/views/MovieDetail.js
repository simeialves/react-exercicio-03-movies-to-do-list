import { useEffect, useState } from "react";
import { MoviesService } from "../services/MoviesService";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
	const [movie, setMovie] = useState({});
	const { movieId } = useParams();

	useEffect(() => {
		MoviesService.getById(movieId).then(({ data }) => {
			console.log(data);
			setMovie(data);
		});
	}, []);

	return (
		<>
			<section>
				<h1>{movie.title}</h1>
			</section>

			<div class="card mb-3">
				<img class="photo" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/" + movie.poster_path} alt="Card image cap" />
				<div class="card-body">
					<p class="card-text2">{movie.overview}</p>
					<p class="card-text2"><small class="text-muted">Note: {movie.vote_average}</small></p>
				</div>
			</div>
		</>
	);
}

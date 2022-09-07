import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { TodoListItem } from "./TodoListItem";

// export function MoviesList({ movies }) {
// // 	return (
// // 		<div className="container">
// // 			{movies.map((movie) => (
// // 				<Movie movieId={movie.id} movieTitle={movie.title} overview={movie.overview} img={movie.poster_path} />
// // 			))}
// // 		</div>
// // 	);
// }

export const MoviesList = ({ movies, status="pending" }) => {

	const [taskItems, setTaskItems] = useState([
		{
			id: 1,
			name: "Task 1",
			status: "pending"
		}

	]);

	useEffect(() => {
		console.log("montou");
	});

	const handleOnToggleCompleted = (taskId, event) => {
		const newTaskItems = movies.map((task) => {
			if (task.id === taskId) {
				return {
					...task,
					status: event.target.checked ? "completed" : "pending"
				};
			}

			return task;
		});

		setTaskItems(newTaskItems);
	};

	return (
		<div>
			<ul>
				{movies.map((task) => (
					<li>
						<TodoListItem
							onToggleCompleted={handleOnToggleCompleted}
							taskId={task.id}
							status={status}
							taskName={task.title}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};


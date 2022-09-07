import "./App.css";
import "./styles.css";
import { Header } from "./components/Header";
import { ApplicationRoutes } from "./routes/ApplicationRoutes";
import { TodoList } from "./components/TodoList";

function App() {
	return (
		<>
			<Header />
			<h1>Lista de Filmes a Serem Assistidos:</h1>
			<ApplicationRoutes />
		</>
	);
}

export default App;

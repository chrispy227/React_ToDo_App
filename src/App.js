import React, { useState, useEffect } from "react";
import "./App.css";
// Importing Components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
	// State
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	// Functions and events
	// Save to Local Browser Storage

	// UseEffect runs once with no params on load, if given an param in [array], then will run for that state change.
	// const saveLocalTodos = () => {
	// 	localStorage.setItem("todos", JSON.stringify(todos));
	// };
	// const getLocalTodos = () => {
	// 	if (localStorage.getItem("todos") === null) {
	// 		localStorage.setItem("todos", JSON.stringify([]));
	// 	} else {
	// 		let todoLocal = JSON.parse(localStorage.getItem("todos"),
	// 		setTodos(todoLocal),
	// 	}
	// }

	// RUN ONCE on app start
	// useEffect(() => {

	// 	getLocalTodos();
	// }, [todos])
	// More than once
	useEffect(() => {
		const filterHandler = () => {
			switch (status) {
				case "completed":
					setFilteredTodos(todos.filter((todo) => todo.completed === true));
					break;
				case "uncompleted":
					setFilteredTodos(todos.filter((todo) => todo.completed === false));
					break;
				default:
					setFilteredTodos(todos);
					break;
			}
		};

		filterHandler();
		// saveLocalTodos();
	}, [todos, status]);

	return (
		<div className="App">
			<header>
				<h1>Chris's ToDo List</h1>
			</header>
			<Form
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<ToDoList
				filteredTodos={filteredTodos}
				setTodos={setTodos}
				todos={todos}
			/>
		</div>
	);
}

export default App;

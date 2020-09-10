import React, { useState } from "react";
import "./App.css";
// Importing Components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
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
			/>
			<ToDoList todos={todos} />
		</div>
	);
}

export default App;

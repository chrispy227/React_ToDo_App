import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
	// Sets the input text
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	}; // Submitting a Todo creates a new object with a string in the below array and rando ID
	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]); // ...todos is spread, so whatever exists, then new one is added.
		setInputText(""); // Clears the useState data of setInputText
	};
	const statusHandler = (e) => {
		setStatus(e.target.value);
	};
	return (
		<form>
			<input // value keeps input box updated with new items added as useState is cleared each time
				value={inputText}
				onChange={inputTextHandler}
				type="text"
				className="todo-input"
			/>
			<button onClick={submitTodoHandler} className="todo-button" type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select onChange={statusHandler} name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;

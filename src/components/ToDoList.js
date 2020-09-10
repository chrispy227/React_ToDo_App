import React from "react";
// Import Components
import ToDo from "./ToDo";

const ToDoList = ({ todos }) => {
	// Map to loop and render out a component
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{todos.map((todo) => (
					<ToDo text={todo.text} id={todo.id} />
				))}
			</ul>
		</div>
	);
};

export default ToDoList;

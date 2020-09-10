import React from "react";
// Import Components
import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos }) => {
	// Map to loop and render out a component
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{todos.map((todo) => (
					<ToDo
						setTodos={setTodos}
						todos={todos}
						key={todo.id}
						text={todo.text}
						todo={todo}
						id={todo.id}
					/>
				))}
			</ul>
		</div>
	);
};

export default ToDoList;

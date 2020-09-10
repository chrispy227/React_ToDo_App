import React from "react";
// Import Components
import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
	// Map to loop and render out a component
	console.log(filteredTodos);
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map((todo) => (
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

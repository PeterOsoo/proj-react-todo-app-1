import Todo from "./Todo"
import FIlterButton from "./FIlterButton"

const TodoContainer = () => {
	return (
		<div>
			<h3 className="my-3">Todo List</h3>
			<FIlterButton />
			<h5>3 tasks remaining</h5>
			<Todo name="Eat" completed={true} id="todo-0" />
			<Todo name="Sleep" completed={false} id="todo-1" />
			<Todo name="Watch" completed={false} id="todo-2" />

			<button type="button" className="btn btn-danger my-3">
				Clear Todo{" "}
			</button>
		</div>
	)
}

export default TodoContainer

import Todo from "./Todo"

const TodoContainer = () => {
	return (
		<div>
			<h3 className="my-3">Todo List</h3>
			<Todo />
			<Todo />
			<Todo />
			<button type="button" class="btn btn-danger my-3">
				Clear Todo{" "}
			</button>
		</div>
	)
}

export default TodoContainer

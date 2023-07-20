import { useState } from "react"

const TodoForm = () => {
	const [todoItem, setTodoItem] = useState("")

	const changeTodo = e => {
		// console.log(e.target.value)
		console.log(todoItem)
	}
	return (
		<div>
			<form action="#">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						What are you intending to do?
					</label>
					<input
						type="text"
						className="form-control"
						id="todo"
						value=""
						onChange={e => setTodoItem(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-dark">
					Add Todo{" "}
				</button>
			</form>
		</div>
	)
}

export default TodoForm

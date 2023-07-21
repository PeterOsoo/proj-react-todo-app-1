const TodoForm = () => {
	return (
		<div>
			<form action="#">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						What are you intending to do?
					</label>
					<input type="text" className="form-control" id="todo" />
				</div>
				<button type="submit" className="btn btn-dark">
					Add Todo{" "}
				</button>
			</form>
		</div>
	)
}

export default TodoForm

const TodoForm = () => {
	return (
		<div>
			<form action="#">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Todo Item
					</label>
					<input type="text" className="form-control" id="todo" />
				</div>
				<button type="submit" className="btn btn-primary">
					Add Todo{" "}
				</button>
			</form>
		</div>
	)
}

export default TodoForm

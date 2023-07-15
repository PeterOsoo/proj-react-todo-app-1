const TodoForm = () => {
	return (
		<div>
			<form action="#">
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">
						Todo Item
					</label>
					<input type="text" class="form-control" id="todo" />
				</div>
				<button type="submit" class="btn btn-primary">
					Add Todo{" "}
				</button>
			</form>
		</div>
	)
}

export default TodoForm

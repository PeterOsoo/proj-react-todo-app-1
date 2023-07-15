import { LiaCheckSolid, LiaTrashSolid, LiaPenSolid } from "react-icons/lia"

const Todo = () => {
	return (
		<div class="card">
			<div class="card-body">
				<span>Todo</span> <LiaPenSolid /> <LiaCheckSolid /> <LiaTrashSolid />
			</div>
			{/* <span class="bi bi-trash"></span> */}
		</div>
	)
}

export default Todo

import { LiaCheckSolid, LiaTrashSolid, LiaPenSolid } from "react-icons/lia"

const Todo = () => {
	return (
		<div className="card">
			<div className="card-body">
				<span>Todo</span> <LiaPenSolid /> <LiaCheckSolid /> <LiaTrashSolid />
			</div>

			{/* <span className="bi bi-trash"></span> */}
		</div>
	)
}

export default Todo

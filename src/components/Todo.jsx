import { LiaCheckSolid, LiaTrashSolid, LiaPenSolid } from "react-icons/lia"

const Todo = ({ name }) => {
	return (
		<div className="card">
			<div className="card-body">
				<span>{name} </span> <LiaPenSolid /> <LiaCheckSolid /> <LiaTrashSolid />
			</div>

			{/* <span className="bi bi-trash"></span> */}
		</div>
	)
}

export default Todo

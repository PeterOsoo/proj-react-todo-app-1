import { LiaCheckSolid, LiaTrashSolid, LiaPenSolid } from "react-icons/lia"

const Todo = ({ name }) => {
	return (
		<div className="card">
			<div className="card-body row">
				<span className="col-sm-9">{name} </span>{" "}
				<span className="col-sm-3 text-end ">
					<LiaPenSolid /> <LiaCheckSolid /> <LiaTrashSolid />
				</span>
			</div>

			{/* <span className="bi bi-trash"></span> */}
		</div>
	)
}

export default Todo

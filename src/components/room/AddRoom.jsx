// import React, { useState } from "react"
// import { addRoom } from "../utils/ApiFunctions"
// import RoomTypeSelector from "../common/RoomTypeSelector"
// import { Link } from "react-router-dom"

// const AddRoom = () => {
// 	const [newRoom, setNewRoom] = useState({
// 		photo: null,
// 		roomType: "",
// 		roomPrice: "",
// 		pgId:"",
// 		pgName:"",
// 		location:""
// 	})

// 	const [successMessage, setSuccessMessage] = useState("")
// 	const [errorMessage, setErrorMessage] = useState("")
// 	const [imagePreview, setImagePreview] = useState("")

// 	const handleRoomInputChange = (e) => {
// 		const name = e.target.name
// 		let value = e.target.value
// 		if (name === "roomPrice" || name==="pgId") {
// 			if (!isNaN(value)) {
// 				value = parseInt(value)
// 			} else {
// 				value = ""
// 			}
// 		}
// 		setNewRoom({ ...newRoom, [name]: value })
// 	}
	

// 	const handleImageChange = (e) => {
// 		const selectedImage = e.target.files[0]
// 		setNewRoom({ ...newRoom, photo: selectedImage })
// 		setImagePreview(URL.createObjectURL(selectedImage))
// 	}

// 	const handleSubmit = async (e) => {
// 		e.preventDefault()
// 		try {
// 			const success = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice,newRoom.pgId,newRoom.pgName,newRoom.location)
// 			if (success !== undefined) {
// 				setSuccessMessage("A new room was  added successfully !")
// 				setNewRoom({ photo: null, roomType: "", roomPrice: "",pgId:"",pgName:"",location:"" })
// 				setImagePreview("")
// 				setErrorMessage("")
// 			} else {
// 				setErrorMessage("Error adding new room")
// 			}
// 		} catch (error) {
// 			setErrorMessage(error.message)
// 		}
// 		setTimeout(() => {
// 			setSuccessMessage("")
// 			setErrorMessage("")
// 		}, 3000)
// 	}

// 	return (
// 		<>
// 			<section className="container mt-5 mb-5">
// 				<div className="row justify-content-center">
// 					<div className="col-md-8 col-lg-6">
// 						<h2 className="mt-5 mb-2">Add a New Room</h2>
// 						{successMessage && (
// 							<div className="alert alert-success fade show"> {successMessage}</div>
// 						)}

// 						{errorMessage && <div className="alert alert-danger fade show"> {errorMessage}</div>}

// 						<form onSubmit={handleSubmit}>
// 							<div className="mb-3">
// 								<label htmlFor="roomType" className="form-label">
// 									Room Type
// 								</label>
// 								<div>
// 									<RoomTypeSelector
// 										handleRoomInputChange={handleRoomInputChange}
// 										newRoom={newRoom}
// 									/>
// 								</div>
// 							</div>
// 							<div className="mb-3">
// 								<label htmlFor="roomPrice" className="form-label">
// 									Room Price
// 								</label>
// 								<input
// 									required
// 									type="number"
// 									className="form-control"
// 									id="roomPrice"
// 									name="roomPrice"
// 									value={newRoom.roomPrice}
// 									onChange={handleRoomInputChange}
// 								/>
// 							</div>
// 							<div className="mb-3">
// 								<label htmlFor="pgId" className="form-label">
// 									PG Id
// 								</label>
// 								<input
// 									required
// 									type="number"
// 									className="form-control"
// 									id="pgId"
// 									name="pgId"
// 									value={newRoom.pgId}
// 									onChange={handleRoomInputChange}
// 								/>
// 							</div>
// 							<div className="mb-3">
//                 	<label htmlFor="pgName" className="form-label">
//                     PG Name
//                 </label>
//                 <input
//                     required
//                     type="text"
//                     className="form-control"
//                     id="pgName"
//                     name="pgName"
//                     value={newRoom.pgName}
//                     onChange={handleRoomInputChange}
//                 />
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="location" className="form-label">
//                     Location
//                 </label>
//                 <input
//                     required
//                     type="text"
//                     className="form-control"
//                     id="location"
//                     name="location"
//                     value={newRoom.location}
//                     onChange={handleRoomInputChange}
//                 />
//             </div>
// 							<div className="mb-3">
// 								<label htmlFor="photo" className="form-label">
// 									Room Photo
// 								</label>
// 								<input
// 									required
// 									name="photo"
// 									id="photo"
// 									type="file"
// 									className="form-control"
// 									onChange={handleImageChange}
// 								/>
// 								{imagePreview && (
// 									<img
// 										src={imagePreview}
// 										alt="Preview  room photo"
// 										style={{ maxWidth: "400px", maxHeight: "400px" }}
// 										className="mb-3"></img>
// 								)}
// 							</div>
// 							<div className="d-grid gap-2 d-md-flex mt-2">
// 								<Link to={"/existing-rooms"} className="btn btn-outline-info">
// 									Existing rooms
// 								</Link>
// 								<button type="submit" className="btn btn-outline-primary ml-5">
// 									Save Room
// 								</button>
// 							</div>
// 						</form>
// 					</div>
// 				</div>
// 			</section>
// 		</>
// 	)
// }

// export default AddRoom



import React, { useState } from "react";
import { addRoom } from "../utils/ApiFunctions";
import RoomTypeSelector from "../common/RoomTypeSelector";
import { Link } from "react-router-dom";

const AddRoom = () => {
	const [ newRoom, setNewRoom] = useState({
		photo: null,
		roomType: "",
		roomPrice: "",
		pgId: "",
		pgName: "",
		location: ""
	});

	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [imagePreview, setImagePreview] = useState("");

	const handleRoomInputChange = (e) => {
		const name = e.target.name;
		let value = e.target.value;
		if (name === "roomPrice" || name === "pgId") {
			if (!isNaN(value)) {
				value = parseInt(value);
			} else {
				value = "";
			}
		}
		setNewRoom({ ...newRoom, [name]: value });
	};

	const handleImageChange = (e) => {
		const selectedImage = e.target.files[0];
		setNewRoom({ ...newRoom, photo: selectedImage });
		setImagePreview(URL.createObjectURL(selectedImage));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log("Submitting form with data:", newRoom);
			const success = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice, newRoom.pgId, newRoom.pgName, newRoom.location);
			if (success !== undefined) {
				setSuccessMessage("A new room was added successfully!");
				setNewRoom({ photo: null, roomType: "", roomPrice: "", pgId: "", pgName: "", location: "" });
				setImagePreview("");
				setErrorMessage("");
			} else {
				setErrorMessage("Error adding new room");
			}
		} catch (error) {
			setErrorMessage(error.message);
		}
		setTimeout(() => {
			setSuccessMessage("");
			setErrorMessage("");
		}, 3000);
	};

	return (
		<>
			<section className="container mt-5 mb-5">
				<div className="row justify-content-center">
					<div className="col-md-8 col-lg-6">
						<h2 className="mt-5 mb-2">Add a New Room</h2>
						{successMessage && (
							<div className="alert alert-success fade show">{successMessage}</div>
						)}

						{errorMessage && <div className="alert alert-danger fade show">{errorMessage}</div>}

						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="roomType" className="form-label">
									Room Type
								</label>
								<div>
									<RoomTypeSelector
										handleRoomInputChange={handleRoomInputChange}
										newRoom={newRoom}
									/>
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="roomPrice" className="form-label">
									Room Price
								</label>
								<input
									required
									type="number"
									className="form-control"
									id="roomPrice"
									name="roomPrice"
									value={newRoom.roomPrice}
									onChange={handleRoomInputChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="pgId" className="form-label">
									PG Id
								</label>
								<input
									required
									type="number"
									className="form-control"
									id="pgId"
									name="pgId"
									value={newRoom.pgId}
									onChange={handleRoomInputChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="pgName" className="form-label">
									PG Name
								</label>
								<input
									required
									type="text"
									className="form-control"
									id="pgName"
									name="pgName"
									value={newRoom.pgName}
									onChange={handleRoomInputChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="location" className="form-label">
									Location
								</label>
								<input
									required
									type="text"
									className="form-control"
									id="location"
									name="location"
									value={newRoom.location}
									onChange={handleRoomInputChange}
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="photo" className="form-label">
									Room Photo
								</label>
								<input
									required
									name="photo"
									id="photo"
									type="file"
									className="form-control"
									onChange={handleImageChange}
								/>
								{imagePreview && (
									<img
										src={imagePreview}
										alt="Preview room photo"
										style={{ maxWidth: "400px", maxHeight: "400px" }}
										className="mb-3"
									/>
								)}
							</div>
							<div className="d-grid gap-2 d-md-flex mt-2">
								<Link to={"/existing-rooms"} className="btn btn-outline-info">
									Existing rooms
								</Link>
								<button type="submit" className="btn btn-outline-primary ml-5">
									Save Room
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default AddRoom;

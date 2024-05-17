// import React, { useEffect, useState } from "react"
// import { getRoomById, updateRoom } from "../utils/ApiFunctions"
// import { Link, useParams } from "react-router-dom"

// const EditRoom = () => {
// 	const [room, setRoom] = useState({
// 		photo: "",
// 		roomType: "",
// 		roomPrice: "",
// 		pgId: "",
// 		pgName: "",
// 		location: ""
// 	})

// 	const [imagePreview, setImagePreview] = useState("")
// 	const [successMessage, setSuccessMessage] = useState("")
// 	const [errorMessage, setErrorMessage] = useState("")
// 	const { roomId } = useParams()

// 	const handleImageChange = (e) => {
// 		const selectedImage = e.target.files[0]
// 		setRoom({ ...room, photo: selectedImage })
// 		setImagePreview(URL.createObjectURL(selectedImage))
// 	}


// 	useEffect(() => {
// 		const fetchRoom = async () => {
// 			try {
// 				const roomData = await getRoomById(roomId)
// 				setRoom(roomData)
// 				setImagePreview(roomData.photo)
// 			} catch (error) {
// 				console.error(error)
// 			}
// 		}

// 		fetchRoom()
// 	}, [roomId])

// 	const handleSubmit = async (e) => {
// 		e.preventDefault()

// 		try {
// 			const response = await updateRoom(roomId, room)
// 			if (response.status === 200) {
// 				setSuccessMessage("Room updated successfully!")
// 				const updatedRoomData = await getRoomById(roomId)
// 				setRoom(updatedRoomData)
// 				setImagePreview(updatedRoomData.photo)
// 				setErrorMessage("")
// 			} else {
// 				setErrorMessage("Error updating room")
// 			}
// 		} catch (error) {
// 			console.error(error)
// 			setErrorMessage(error.message)
// 		}
// 	}

// 	return (
// 		<>
// 			<section className="container mt-5 mb-5">
// 				<div className="row justify-content-center">
// 					<div className="col-md-8 col-lg-6">
// 						<h2 className="mt-5 mb-2">Add a New Room</h2>
// 						{successMessage && (
// 							<div className="alert alert-success fade show">{successMessage}</div>
// 						)}

// 						{errorMessage && <div className="alert alert-danger fade show">{errorMessage}</div>}

// 						<form onSubmit={handleSubmit}>
// 							<div className="mb-3">
// 								<label htmlFor="roomType" className="form-label">
// 									Room Type
// 								</label>
							 
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
// 								<label htmlFor="pgName" className="form-label">
// 									PG Name
// 								</label>
// 								<input
// 									required
// 									type="text"
// 									className="form-control"
// 									id="pgName"
// 									name="pgName"
// 									value={newRoom.pgName}
// 									onChange={handleRoomInputChange}
// 								/>
// 							</div>
// 							<div className="mb-3">
// 								<label htmlFor="location" className="form-label">
// 									Location
// 								</label>
// 								<input
// 									required
// 									type="text"
// 									className="form-control"
// 									id="location"
// 									name="location"
// 									value={newRoom.location}
// 									onChange={handleRoomInputChange}
// 								/>
// 							</div>
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
// 										alt="Preview room photo"
// 										style={{ maxWidth: "400px", maxHeight: "400px" }}
// 										className="mb-3"
// 									/>
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
// 	);
// }
// export default EditRoom
import React, { useEffect, useState } from "react";
import { getRoomById, updateRoom } from "../utils/ApiFunctions";
import { Link, useParams } from "react-router-dom";

const EditRoom = () => {
    const [room, setRoom] = useState({
        photo: "",
        roomType: "",
        roomPrice: "",
        pgId: "",
        pgName: "",
        location: ""
    });

    const [imagePreview, setImagePreview] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { roomId } = useParams();

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setRoom({ ...room, photo: selectedImage });
        setImagePreview(URL.createObjectURL(selectedImage));
    };

    const handleRoomInputChange = (e) => {
        const { name, value } = e.target;
        setRoom({ ...room, [name]: value });
    };

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const roomData = await getRoomById(roomId);
                setRoom(roomData);
                setImagePreview(roomData.photo);
            } catch (error) {
                console.error(error);
                setErrorMessage("Error fetching room data");
            }
        };

        fetchRoom();
    }, [roomId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await updateRoom(roomId, room);
            if (response.status === 200) {
                setSuccessMessage("Room updated successfully!");
                const updatedRoomData = await getRoomById(roomId);
                setRoom(updatedRoomData);
                setImagePreview(updatedRoomData.photo);
                setErrorMessage("");
            } else {
                setErrorMessage("Error updating room");
            }
        } catch (error) {
            console.error(error);
            setErrorMessage(error.message);
        }
    };

    return (
        <section className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <h2 className="mt-5 mb-2">Edit Room</h2>
                    {successMessage && (
                        <div className="alert alert-success fade show">{successMessage}</div>
                    )}

                    {errorMessage && (
                        <div className="alert alert-danger fade show">{errorMessage}</div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="roomType" className="form-label">Room Type</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="roomType"
                                name="roomType"
                                value={room.roomType}
                                onChange={handleRoomInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="roomPrice" className="form-label">Room Price</label>
                            <input
                                required
                                type="number"
                                className="form-control"
                                id="roomPrice"
                                name="roomPrice"
                                value={room.roomPrice}
                                onChange={handleRoomInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pgId" className="form-label">PG Id</label>
                            <input
                                required
                                type="number"
                                className="form-control"
                                id="pgId"
                                name="pgId"
                                value={room.pgId}
                                onChange={handleRoomInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pgName" className="form-label">PG Name</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="pgName"
                                name="pgName"
                                value={room.pgName}
                                onChange={handleRoomInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input
                                required
                                type="text"
                                className="form-control"
                                id="location"
                                name="location"
                                value={room.location}
                                onChange={handleRoomInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="photo" className="form-label">Room Photo</label>
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
    );
};

export default EditRoom;

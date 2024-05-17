// import React from "react"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
// import AddRoom from "./components/room/AddRoom"
 
// function App() {
// 	return <>
// 	< AddRoom/>
// 	</>
		 
	
// }

// export default App
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AddRoom from "./components/room/AddRoom";
import Home from "./components/home/Home"
import EditRoom from "./components/room/EditRoom"
import ExistingRooms from "./components/room/ExistingRooms"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
 

function App() {
  return (
    <main>
    <Router>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<AddRoom />} />
        <Route path="/existing-rooms" element={<ExistingRooms />} /> */}
        <Route path="/" element={<Home />} />
						<Route path="/edit-room/:roomId" element={<EditRoom />} />
						<Route path="/existing-rooms" element={<ExistingRooms />} />
            <Route path="/add-room" element={<AddRoom />} />

        {/* Add other routes here */}
      </Routes>
    </Router>
    <Footer />
    </main>
  );
}

export default App;


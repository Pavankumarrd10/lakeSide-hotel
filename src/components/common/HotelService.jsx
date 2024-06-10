import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import Header from "./Header"
import {
	FaClock,
	FaParking,
	FaBook,
	FaWifi
} from "react-icons/fa"

const HotelService = () => {
	return (
		<>
			<div className="mb-2">
				<Header title={"Our Services"} />

				<Row className="mt-4">
					<h4 className="text-center">
						Services at <span className="hotel-color">  PG  - </span>finder
						<span className="gap-2">
							<FaClock className="ml-5" /> 24-Hour Front Desk
						</span>
					</h4>
				</Row>
				<hr />

				<Row xs={1} md={2} lg={3} className="g-4 mt-2">
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaWifi /> WiFi
								</Card.Title>
								<Card.Text>Stay connected with high-speed internet access.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					 
				 
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
								<FaBook /> library
								</Card.Title>
								<Card.Text>A place with study mindset.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title className="hotel-color">
									<FaParking /> Parking
								</Card.Title>
								<Card.Text>Park your car conveniently in our on-site parking lot.</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				 
				</Row>
			</div>
			<hr />
		</>
	)
}

export default HotelService

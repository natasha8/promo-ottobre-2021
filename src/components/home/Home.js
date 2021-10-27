import React from "react";
import "./Home.css";

import { Container, Header, Image, Segment } from "semantic-ui-react";

import { useAuth } from "../util/AuthContex";
import { Link } from "react-router-dom";

const banner = "https://i.ibb.co/1qmG7WR/SK003-SPLT-Banner1-finale.jpg";
const cover = "https://i.ibb.co/7jYRPmm/SK003-SPLT-Art-No-BG.png";

const Home = () => {
	const { currentUser } = useAuth();
	return (
		<Container fluid className="home_container">
			<div className="home_welcome">
				{currentUser && (
					<Header inverted as="h2">
						Welcome {currentUser.email}
					</Header>
				)}
				{!currentUser && (
					<Header inverted as="h2">
						Welcome
					</Header>
				)}
			</div>
			<div className="banner">
				<Segment color="black">
					<Header as="h3" textAlign="center">
						NEW PROMO
					</Header>
				</Segment>
				<Link to="/SK003SPLT">
					<Image src={banner} rounded size="massive" />
				</Link>
			</div>
			<div className="centrino">
				<Segment color="black">
					<Header as="h3" textAlign="center">
						NEW PROMO
					</Header>
				</Segment>
				<Link to="/SK003SPLIT">
					<Image src={cover} rounded size="medium" />
				</Link>
			</div>
		</Container>
	);
};

export default Home;

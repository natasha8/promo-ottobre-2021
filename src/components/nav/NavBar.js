import "./Nav.css";
import React, { useState } from "react";
import { Container, Header, Icon, Image } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../util/AuthContex";

const NavBar = () => {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const history = useHistory();

	const handleLogOut = async () => {
		setError("");
		try {
			await logout();
			history.push("./login");
		} catch {
			setError("Failed to log out");
		}
	};

	return (
		<Container
			fluid
			className="nav_container
		"
		>
			<div className="nav_logo">
				<Link to="/">
					<Image src="/skscritta.png" className="logo" />
				</Link>
			</div>
			<div className="nav_icons">
				{error && <Header as="h3">Error</Header>}
				{currentUser && (
					<segment className="nav_icon">
						<Link to="/promo">
							<Icon name="bars" />
						</Link>
					</segment>
				)}
				{!currentUser && (
					<segment className="nav_icon_lock">
						<Link to="/login">
							<Icon name="lock" />
						</Link>
					</segment>
				)}
				{currentUser && (
					<segment className="nav_icon" onClick={handleLogOut}>
						<Icon name="power off" style={{ color: "#357b8a" }} />
					</segment>
				)}
			</div>
		</Container>
	);
};

export default NavBar;

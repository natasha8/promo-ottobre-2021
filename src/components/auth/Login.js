import React, { Fragment, useState } from "react";
import {
	Button,
	Form,
	Grid,
	Header,
	Message,
	Segment,
} from "semantic-ui-react";
import { useAuth } from "../util/AuthContex";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
	const initialInfo = {
		email: "",
		password: "",
	};

	const [info, setInfo] = useState(initialInfo);

	const { login } = useAuth();

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const handleChange = (e) => {
		const newInfo = { ...info };
		newInfo[e.target.id] = e.target.value;
		setInfo(newInfo);
	};

	const submit = async (e) => {
		e.preventDefault();
		try {
			setError("");
			setLoading(true);

			await login(info.email, info.password);
			history.push("/promo");
		} catch {
			setError("Failed to sign in");
		}
		setLoading(false);
	};

	return (
		<Fragment>
			<Segment fluid inverted className="login">
				<Header as="h2" inverted>
					Login
				</Header>
				{error && (
					<Message
						error
						header="Ops! Something went wrong, please try again"
					/>
				)}
				<Form onSubmit={submit} inverted>
					<Grid.Row>
						<Grid.Column>
							<Form.Input
								id="email"
								type="email"
								value={info.email}
								onChange={handleChange}
								placeholder="Email"
								required
							/>
							<Form.Input
								id="password"
								type="password"
								value={info.password}
								onChange={handleChange}
								placeholder="password"
								required
							/>
							<Button
								fluid
								inverted
								disabled={loading}
								onSubmit={submit}
							>
								Login
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Form>
				<Segment inverted>
					<Link to="/reset-password" style={{ color: "#357b8a" }}>
						reset password
					</Link>
				</Segment>
			</Segment>
		</Fragment>
	);
};

export default Login;

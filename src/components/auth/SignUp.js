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
import { useHistory } from "react-router-dom";

const SignUp = () => {
	const initialInfo = {
		email: "",
		password: "",
	};

	const [info, setInfo] = useState(initialInfo);

	const { signup } = useAuth();

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

			await signup(info.email, info.password);
			history.push("/promo");
		} catch {
			setError("Failed to create account");
		}
		setLoading(false);
	};

	return (
		<Fragment>
			<Segment inverted>
				<Header as="h2" inverted>
					Sign Up
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
								Register
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Form>
			</Segment>
		</Fragment>
	);
};

export default SignUp;

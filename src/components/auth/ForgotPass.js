import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Form,
	Grid,
	Header,
	Message,
	Segment,
} from "semantic-ui-react";
import { useAuth } from "../util/AuthContex";

const ForgotPass = () => {
	const [email, setEmail] = useState("");
	const { resetPassword } = useAuth();
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setEmail(e.target.value);
	};
	const submit = async (e) => {
		e.preventDefault();
		try {
			setMessage("");
			setError("");
			setLoading(true);

			await resetPassword(email);
			setMessage("Check your inbox!");
		} catch {
			setError("Something went wrong!");
		}
		setLoading(false);
	};
	return (
		<Fragment>
			<Segment inverted className="login">
				<Header as="h2" inverted>
					Reset Password
				</Header>
				{message && <Message floating>{message}</Message>}
				{error && <Message error header="Ops! Try again " />}
				{!message && (
					<Form onSubmit={submit} inverted>
						<Grid.Row>
							<Grid.Column>
								<Form.Input
									id="email"
									type="email"
									value={email}
									onChange={handleChange}
									placeholder="Email"
									required
								/>

								<Button
									fluid
									inverted
									disabled={loading}
									onSubmit={submit}
								>
									Reset
								</Button>
							</Grid.Column>
						</Grid.Row>
					</Form>
				)}
				<Segment inverted>
					<Link to="/login" style={{ color: "#357b8a" }}>
						Login
					</Link>
				</Segment>
			</Segment>
		</Fragment>
	);
};

export default ForgotPass;

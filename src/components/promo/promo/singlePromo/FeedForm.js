import React, { useState, Fragment } from "react";
import "../SinglePromo.css";
import { FaBomb } from "react-icons/fa";

import { getFirebase } from "../../../util/firebase";

import { Button, Form, Grid, Segment, Label, Header } from "semantic-ui-react";

import { Select } from "@rebass/forms";

import { useAuth } from "../../../util/AuthContex";

const FeedForm = ({ info }) => {
	const { currentUser } = useAuth();

	const initialInfo = {
		username: "",
		favtrack: "",
		rating: "0",
		comment: "",
	};
	const [hover, setHover] = useState(null);
	const [feedback, setFeedback] = useState(initialInfo);

	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		const newFeedback = { ...feedback };
		newFeedback[e.target.name] = e.target.value;
		setFeedback(newFeedback);
	};
	const generateDate = () => {
		const now = new Date();

		const year = now.getFullYear();

		let month = now.getMonth() + 1;
		if (month < 10) {
			month = `0${month}`; // prepend with a 0
		}

		let day = now.getDate();
		if (day < 10) {
			day = `0${day}`; // prepend with a 0
		}
		let hour = now.getHours();
		let minute = now.getMinutes();
		return {
			formatted: `${day}-${month}-${year} ${hour}:${minute}`, // used for sorting
		};
	};

	const addFeed = (e) => {
		e.preventDefault();
		console.log("REACT...", feedback);
		const date = generateDate();

		const feedInfo = {
			A_username: feedback.username,
			B_email: currentUser.email,
			C_favtrack: feedback.favtrack,
			D_rating: feedback.rating,
			E_comment: feedback.comment,
			F_timestamp: date.formatted,
		};
		getFirebase()
			.database()
			.ref(`/${info.cat}`)
			.push(feedInfo)

			.then(() => {
				setSubmitted(true);
				console.log("SUBMITTED");
			})
			.catch((err) => {
				setSubmitted(false);
				console.log("NOT SUBMITTED", err);
			});
	};

	return (
		<Fragment>
			<Segment inverted className="feed_form">
				{!submitted && (
					<Form onSubmit={addFeed} inverted>
						<Grid columns={2} divided stackable>
							<Grid.Column>
								<Label color="black" circular>
									Name
								</Label>
								<Form.Input
									id="username"
									name="username"
									value={feedback.username}
									onChange={handleChange}
									required
								/>
							</Grid.Column>
							<Grid.Column>
								<Label as="a" color="black" circular>
									Favorite Track
								</Label>

								<Select
									id="favtrack"
									name="favtrack"
									color="white"
									backgroundColor="black"
									value={feedback.favtrack}
									onChange={handleChange}
									required
								>
									<option value={info.tracks[0]}>
										{info.tracks[0]}
									</option>
									<option value={info.tracks[1]}>
										{info.tracks[1]}
									</option>
									<option value={info.tracks[2]}>
										{info.tracks[2]}
									</option>
									<option value={info.tracks[3]}>
										{info.tracks[3]}
									</option>
									<option value={info.tracks[4]}>
										{info.tracks[4]}
									</option>
									<option value={info.tracks[5]}>
										{info.tracks[5]}
									</option>
								</Select>
							</Grid.Column>
						</Grid>

						<Grid.Row>
							<Grid.Column>
								<Label as="a" color="black">
									Rating
								</Label>

								<div>
									{[...Array(5)].map((star, i) => {
										const ratingValue = i + 1;
										return (
											<label key={i}>
												<input
													id="rating"
													type="radio"
													name="rating"
													value={ratingValue}
													onClick={handleChange}
												/>

												<FaBomb
													className="star"
													size={28}
													onMouseEnter={() =>
														setHover(ratingValue)
													}
													onMouseLeave={() =>
														setHover(null)
													}
													color={
														ratingValue <=
														(hover ||
															feedback.rating)
															? "#357b8a"
															: "#000000"
													}
												/>
											</label>
										);
									})}
								</div>

								<Label as="a" color="black">
									Comment
								</Label>
								<Form.TextArea
									rows={7}
									id="comment"
									name="comment"
									placeholder="Leave a comment..."
									onChange={handleChange}
									required
								/>
							</Grid.Column>
						</Grid.Row>

						<Button
							fluid
							inverted
							onSubmit={addFeed}
							className="form"
						>
							Submit
						</Button>
					</Form>
				)}
				{submitted && (
					<Fragment>
						<Segment inverted vertical>
							<Header as="h2" textAlign="center">
								THANK YOU
							</Header>
							<Button fluid color="white" href={info.download}>
								DOWNLOAD
							</Button>
						</Segment>
					</Fragment>
				)}
			</Segment>
		</Fragment>
	);
};

export default FeedForm;

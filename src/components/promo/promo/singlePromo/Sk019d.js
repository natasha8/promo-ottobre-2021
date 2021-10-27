import React, { useEffect, useState } from "react";
import "../SinglePromo.css";
import { firestore } from "../../../util/firebase";
import {
	Container,
	Loader,
	Message,
	Grid,
	Image,
	Header,
} from "semantic-ui-react";
import Player2 from "../../Player2";
import FeedForm from "./FeedForm";

const Sk002split = () => {
	const [promo, setPromo] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const getPromo = () => {
		setLoading(true);
		firestore
			.collection("Promo")
			.where("cat", "==", "SK019D")
			.onSnapshot((snapshot) => {
				try {
					const newPromo = snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}));
					setPromo(newPromo);
					console.log("newPromo:", newPromo);
					setError(false);
				} catch {
					setError(true);
				}
			});
	};
	useEffect(() => {
		getPromo();
	}, []);
	return (
		<>
			{error && <Message loading header="Failed to fetch" />}
			{!promo && loading && <Loader />}
			{promo && (
				<div>
					{promo.map((single) => {
						return (
							<Container
								fluid
								className="single_promo__container"
							>
								<Header as="h2">
									{single.artist} - {single.title}
								</Header>

								<Grid columns={3} divided stackable doubling>
									<Grid.Column>
										<Grid.Row className="single_promo">
											<Image src={single.banner} />
											<Header as="h4">
												{single.description[0]}
											</Header>
											<Header as="h4">
												{single.description[1]}
											</Header>
											<Header as="h4">
												{single.description[2]}
											</Header>
											<Header as="h4">
												{single.description[3]}
											</Header>

											<Header as="h5">
												{single.credits[0]}
											</Header>
											<Header as="h5">
												{single.credits[1]}
											</Header>
											<Header as="h5">
												{single.credits[2]}
											</Header>
											<Header as="h5">
												{single.credits[3]}
											</Header>
										</Grid.Row>
									</Grid.Column>
									<Grid.Column>
										<Grid.Row className="single_promo">
											<Player2 player={single} />
										</Grid.Row>
									</Grid.Column>
									<Grid.Column>
										<Grid.Row className="single_promo">
											<FeedForm info={single} />
										</Grid.Row>
									</Grid.Column>
								</Grid>
							</Container>
						);
					})}
				</div>
			)}
		</>
	);
};

export default Sk002split;

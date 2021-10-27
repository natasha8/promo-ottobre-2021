import React, { useEffect, useState } from "react";
import { Header, Message, Table } from "semantic-ui-react";
import { getFirebase } from "../../../util/firebase";

const FeedBack = () => {
	const [feeds, setFeeds] = useState([]);
	const [feedsFailed, setFeedsFailed] = useState(false);

	const allFeedback = () => {
		let info = [];
		getFirebase()
			.database()
			.ref("/PROMO SK018D")
			.orderByChild("dataFormatted")
			.once("value", (snapshot) => {
				snapshot.forEach((snap) => {
					info.push(snap.val());
				});
			})
			.then(() => setFeeds(info))
			.catch((err) => console.log(err), setFeedsFailed(true));
	};

	useEffect(() => {
		allFeedback();
	}, []);
	return (
		<div>
			<Header inverted as="h1">
				Feedback List
			</Header>
			{feedsFailed && <Message error header="Failed to fetch feedback" />}
			{!feeds && !feedsFailed && <p>Fetching Feeds..</p>}
			{feeds && (
				<Table inverted>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell width="2">Name</Table.HeaderCell>
							<Table.HeaderCell width="2">Email</Table.HeaderCell>
							<Table.HeaderCell width="2">
								Favorite Track
							</Table.HeaderCell>
							<Table.HeaderCell width="1">
								Rating
							</Table.HeaderCell>
							<Table.HeaderCell width="2">
								Comment
							</Table.HeaderCell>
							<Table.HeaderCell width="2">Date</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					{feeds.map((feed, i) => {
						return (
							<Table.Body key={i}>
								<Table.Row>
									<Table.Cell>{feed.A_username}</Table.Cell>
									<Table.Cell>{feed.B_email}</Table.Cell>
									<Table.Cell>{feed.C_favtrack}</Table.Cell>
									<Table.Cell>{feed.D_rating}</Table.Cell>
									<Table.Cell>{feed.E_comment}</Table.Cell>
									<Table.Cell>{feed.F_timestamp}</Table.Cell>
								</Table.Row>
							</Table.Body>
						);
					})}
				</Table>
			)}
		</div>
	);
};

export default FeedBack;

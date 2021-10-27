import "./Promo.css";
import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

//import FeedbackForm from "./FeedForm";
import Player2 from "./Player2";
import PromoInfo from "./PromoInfo";
import FeedForm from "./FeedForm";

function Promo() {
	return (
		<div className="promo_container">
			<Grid columns={3} divided stackable doubling className="promo">
				<Grid.Column>
					<PromoInfo />
				</Grid.Column>
				<Grid.Column>
					<Player2 />
				</Grid.Column>
				<Grid.Column>
					<FeedForm />
				</Grid.Column>
			</Grid>
		</div>
	);
}
export default Promo;

import React from "react";
import "./Promo.css";
import { Link } from "react-router-dom";
import { Image, Header, Segment } from "semantic-ui-react";

const PromoList = ({ card }) => {
	return (
		<>
			<div>
				<Header inverted as="h2" className="promo_list__header">
					Promo List
				</Header>
			</div>
			<div className="promo_container">
				{card.map((promo) => {
					return (
						<Link to={promo.cat}>
							<Segment className="promo_list_segment_desk">
								<div className="promo_list__cover">
									<Image src={promo.banner} />
								</div>
								<div className="promo_list__info">
									<Header as="h3" inverted>
										{promo.artist} {"   -   "} {promo.title}
									</Header>

									<Header as="h4" inverted>
										{promo.release_date}
									</Header>
								</div>
							</Segment>
							<Segment className="promo_list_segment_mobile">
								<Image src={promo.banner} />
							</Segment>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default PromoList;

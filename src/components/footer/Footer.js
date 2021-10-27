import "./Footer.css";
import React from "react";
import { Grid } from "semantic-ui-react";
import {
	SiFacebook,
	SiInstagram,
	SiDiscogs,
	SiBandcamp,
	SiSoundcloud,
} from "react-icons/si";

const Footer = () => {
	return (
		<>
			<Grid
				columns={2}
				stackable
				verticalAlign="middle"
				className="footer"
			>
				<Grid.Column className="footer">
					<div className="footer_icons">
						<a
							href="https://www.facebook.com/SecretKeywords"
							target="_blank"
							rel="noreferrer"
							className="link_social"
						>
							<SiFacebook />
						</a>
						<a
							href="https://www.instagram.com/secretkeywords/"
							target="_blank"
							rel="noreferrer"
							className="link_social"
						>
							<SiInstagram />
						</a>
						<a
							href="https://www.discogs.com/label/782530-secret-keywords"
							target="_blank"
							rel="noreferrer"
							className="link_social"
						>
							<SiDiscogs />
						</a>
						<a
							href="https://secretkeywords.bandcamp.com/"
							target="_blank"
							rel="noreferrer"
							className="link_social"
						>
							<SiBandcamp />
						</a>
						<a
							href="https://soundcloud.com/secretkeywords"
							target="_blank"
							rel="noreferrer"
							className="link_social"
						>
							<SiSoundcloud />
						</a>
					</div>
				</Grid.Column>

				<Grid.Column>
					<div className="footer_text">
						<h4>Secret Keywords Ltd 2021, Berlin</h4>
					</div>
				</Grid.Column>
			</Grid>
		</>
	);
};

export default Footer;

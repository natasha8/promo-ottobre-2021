import React, { Fragment } from "react";
import ReactPlayer from "react-player/soundcloud";

const Player2 = ({ player }) => {
	return (
		<Fragment>
			<ReactPlayer
				color="#FFFFFF"
				url={player.playlist}
				width="100%"
				height="65vh"
				playing={false}
				controls={false}
			/>
		</Fragment>
	);
};

export default Player2;

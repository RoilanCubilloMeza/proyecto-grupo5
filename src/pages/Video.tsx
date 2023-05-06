import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo
extends React.Component {
render() {
	const opts = {
	height: "390",
	width: "640",
	playerVars: {
		autoplay: 1,
	},
	};

	return (
	<div>
		<h3>GeeksforGeeks - Youtube</h3>
		<YouTube videoId="https://www.youtube.com/embed/tgbNymZ7vqY"
			opts={opts} onReady={this._onReady} />
	</div>
	);
}

_onReady(event: { target: { pauseVideo: () => void; }; }) {
	event.target.pauseVideo();
}
}

import React from "react";
import YouTube from "react-youtube";

interface VideoPlayerProps {
  videoId: string;
 tittleId:string;
}

class VideoPlayer extends React.Component<VideoPlayerProps> {
  render() {
    const { videoId } = this.props;
    
    const opts = {
      height: "390",
      width: "500",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay:0,
        controls:0,
        disablekb:0,
        end:0,
        fs:1,
        loop:1,
        start:0

      },
    };

    return <YouTube videoId={videoId} opts={opts} />; 

  }
}

export default VideoPlayer;

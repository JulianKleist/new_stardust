import React from 'react';
import './video-player.css';

class VideoPlayer extends React.Component {
    render() {
        const { embedUrl, VideoHeight, VideoWidth } = this.props;

        return (
            <div className="video-player" >
                <iframe
                    height={VideoHeight}
                    width={VideoWidth}
                    src={embedUrl}
                    title="YouTube Video Player"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
        );
    }
}

export default VideoPlayer;
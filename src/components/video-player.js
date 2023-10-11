import React from 'react';
import './video-player.css';

class VideoPlayer extends React.Component {
    render() {
        const { embedUrl } = this.props;

        return (
            <div className="video-player" >
                <iframe
                    height={"230px"}
                    width={"400px"}
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
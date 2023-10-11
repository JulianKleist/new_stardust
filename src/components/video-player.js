import React from 'react';
import './video-player.css';

class VideoPlayer extends React.Component {
    render() {
        const { embedUrl } = this.props;

        return (
            <div className='row mt-4 mb-2'>
                <div className='col-12 d-flex justify-content-center'>
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
                </div>
            </div>
        );
    }
}

export default VideoPlayer;
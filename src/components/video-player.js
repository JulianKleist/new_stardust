import React from 'react';

class VideoPlayer extends React.Component {
    render() {
        return (
            <div className="video-player ratio ratio-16x9" >
                <iframe src="https://www.youtube.com/embed/L82WOSgNJn8?si=6eOAKFrd6h2eVFAd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        );
    }
}

export default VideoPlayer;
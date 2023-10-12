import React from 'react';
import './spacer_line.css';

class HorizontalLine extends React.Component {
  render() {
    const { height="100px", width="100px", DataAos="", DataAosDuration="0" } = this.props;

    return (
      <div className='horizontal_line' style={{height: height, width: width}} data-aos={DataAos} data-aos-duration={DataAosDuration}></div>
    );
  }
}

export default HorizontalLine;
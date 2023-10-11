import React from 'react';
import './spacer_line.css';

class HorizontalLine extends React.Component {
  render() {
    const { height="100px", width="100px" } = this.props;

    return (
      <div className='horizontal_line' style={{height: height, width: width}} data-aos="fade-down" data-aos-duration="2000"></div>
    );
  }
}

export default HorizontalLine;
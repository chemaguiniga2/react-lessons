import React from 'react';

const LeftArrow  = (props) => {
    return (
      <div className="" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
}

export default LeftArrow;
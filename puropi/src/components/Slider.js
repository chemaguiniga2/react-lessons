import React, {Component} from 'react';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
      ],
      currentIndex: 0
    };
  }

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  render() {
    return(
      <div className="">
        <Slide />

        <LeftArrow
          goToPrevSlide={this.goToPrevSlide}
        />
        <RightArrow
          goToNextSlide={this.goToNextSlide}
        />

      </div>
    );
  }

}
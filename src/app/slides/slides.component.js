import React from 'react';
import shuffle from 'lodash/shuffle';
import './slides.component.scss';
import Assets from './slides.data';
import Slide1 from './slide1.component';
import Slide2 from './slide2.component';
import Slide3 from './slide3.component';

const bucket = 'https://s3.amazonaws.com/ph-balanced/backgrounds/';

class Slides extends React.Component {
  constructor(props) {
    super(props);
    this.assets = shuffle(Assets);
    this.items = this.assets.map((asset) => {
      const item = bucket + asset;
      return item;
    });
  }
  render() {
    return (
      <span>
        <Slide1 slide={this.items[0]} />
        <Slide2 slide={this.items[1]} />
        <Slide3 slide={this.items[2]} />
      </span>
    );
  }
}

export default Slides;

import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import shuffle from 'lodash/shuffle';
import './photos.component.scss';
import Assets from './photos.data';

const bucket = 'https://s3.amazonaws.com/ph-balanced/thumbnails/';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.assets = shuffle(Assets);
    this.items = this.assets.map((asset, index) => {
      const item = bucket + asset;
      return (<figure key={index} className="pull-left">
        <img src={item} />
      </figure>);
    });
  }
  render() {
    return (
      <CSSTransitionGroup
        transitionName="fade-in"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionEnter={false}
        transitionLeaveTimeout={300}
        transitionLeave={false}
      >
        <div className="photos-wrapper">
          <section className="quote">
            <h1>Hello, my name is Paul.</h1>
            <h5>I am a webdeveloper, database architect, father, husband and good guy!</h5>
          </section>
          <section id="slide-0" className="home">
            <article className="photos">
              {this.items}
            </article>
          </section>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default Photos;

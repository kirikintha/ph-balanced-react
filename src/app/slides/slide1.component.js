import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Indicator from './indicator.component';

class Slide1 extends React.Component {
  render() {
    const id = 'slide-1';
    const style = {
      backgroundImage: `url(${this.props.slide})`,
    };
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
        <Indicator id={id} />
        <section id="slide-1" className="slide parallax about" style={style} >
          <article className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-block text-left">
                    <h4 className="card-title">Who am I?</h4>
                    <p className="card-text">Currently I work for the <a href="https://www.denvergov.org/content/denvergov/en/denver-elections-divison.html" target="_blank">Clerk and Recorders Office: Denver Elections Division</a>.</p>
                    <p className="card-text">I am a database architect, senior developer, technology manager and handle data requests. I work with a number of different counties in Coloardo, and help supply demographic and trend analysis for public evaluation. Right now, I am working on re-tooling elections division technology for a new streamlined and modern approach with <a href="https://bitbucket.org/chromiumembedded/cef" target="_blank">Chromium Embedded Framework</a> and <a href="https://msdn.microsoft.com/en-us/library/t71a733d(v=vs.140).aspx" target="_blank">ClickOnce</a>.</p>
                    <p className="card-text">In my off-time I play music, barbeque, hike with my family and roam around the foothills and high country. I keep my skills sharp with new web development, as much as I can.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card with-image">
                  <img className="card-img-top" src="https://s3.amazonaws.com/ph-balanced/images/IMG_2591.jpg" />
                </div>
              </div>
            </div>
          </article>
        </section>
      </CSSTransitionGroup>
    );
  }
}

export default Slide1;

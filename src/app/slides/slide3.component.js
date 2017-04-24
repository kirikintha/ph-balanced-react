import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Indicator from './indicator.component';

class Slide2 extends React.Component {
  render() {
    const year = new Date().getFullYear();
    const id = 'slide-3';
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
        <section id="slide-3" className="slide parallax work" style={style}>
          <div className="row the-work">
            <div className="col">
              <h2>The Work</h2>
              <h5>These are some of the pieces of work I have done over the last few years&hellip;</h5>
            </div>
          </div>
          <article className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="card with-image">
                  <img className="card-img-top" src="https://s3.amazonaws.com/ph-balanced/images/redrocks-online.png" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-block text-left">
                    <h4 className="card-title">Redrocks Online</h4>
                    <p className="card-text">Redrocks is the premier concert destination in Colorado, if not the world! I worked as lead DevOps for this project at 303 software, and set up the infrastructure to keep the site blazing fast under extreme load. This site can handle tens of thousands of requests a second and not think twice.
                            <a href="//redrocksonline.com" target="_blank">Check it out!</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-block text-left">
                    <h4 className="card-title">5280 Magazine</h4>
                    <p className="card-text">I re-worked the back-end Drupal installation for 5280.com and worked with their team to fix some of the legacy issues they were having with their site. I sped up the front page especially and also helped with their google ads for mobile.
                            <a href="//5280.com" target="_blank">Look at the latest edition</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card with-image">
                  <img className="card-img-top" src="https://s3.amazonaws.com/ph-balanced/images/5280.png" />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="card with-image">
                  <img className="card-img-top" src="https://s3.amazonaws.com/ph-balanced/images/trustile.png" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-block text-left">
                    <h4 className="card-title">Trustile</h4>
                    <p className="card-text">Using Solr search, I created a fast faceted search engine for their door styles. The search is very fast, and is one of most interesting custom modules I have made in Drupal.
                            <a href="//www.trustile.com/design-planning/photo-gallery" target="_blank">Look for a door style</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-block text-left">
                    <h4 className="card-title">e-Sign</h4>
                    <p className="card-text">I was the lead developer on the e-Sign application in 2014, while I was working for 303 Software. I worked with a great team at 303 and this is one of the feathers in my cap. I still update the database regularly for this project, and manage the servers.
                            <a href="//303software.com/eSign" target="_blank">Look at the information brochure</a>
                      <a className="award" href="//www.denverpost.com/2015/08/21/denver-election-officials-win-national-award-for-petition-tablet-app/" target="_blank">Read about the award.</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card with-image">
                  <img className="card-img-top" src="https://s3.amazonaws.com/ph-balanced/images/esign.png" />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="card with-image">
                  <img className="card-img-top" src="https://s3.amazonaws.com/ph-balanced/images/ballot-trace.png" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-block text-left">
                    <h4 className="card-title">Ballot Trace</h4>
                    <p className="card-text">With 130k subscribers and climbing, Ballot Trace is a project I help manage for my department at Elections. The developers at Technology Services (Thanks Yasu!) have created a killer app that tracks your ballot information. I monitor the front-end, help out users on the system and create the ballot information that is used in the system.
                            <a href="https://www.denvergov.org/content/denvergov/en/denver-elections-divison/voter-election-information/ballot-trace.html" target="_blank">Read for more info</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-block text-left">
                    <h4 className="card-title">Lighthouse PE</h4>
                    <p className="card-text">Lighthouse PE is a cutting edge technology, which uses low energy beacons and GPS to deliver just-in-time information to end-users. Lighthouse is a very deep software as service application that I helped develop at Off Madison Ave. Erik Madsen and I worked with Spike Stevens to develop the technology and push the limits of mobile and SaS to a new level. This is by and far the most innovative project I have worked on and Spike, Erik and OMA are a cut above the rest. The team at OMA is working on the next phase of Lighthouse right now, and are taking it farther than before. Awesome Job!
                            <a href="http://www.lighthousepe.com/" target="_blank">Check out the brochure</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card with-image">
                  <img className="card-img-top" src="https://s3.amazonaws.com/ph-balanced/images/lighthouse.png" />
                </div>
              </div>
            </div>
            <p className="copy text-center"> &copy; {year} PH-Balanced Designs</p>
          </article>
        </section>
      </CSSTransitionGroup>
    );
  }
}

export default Slide2;

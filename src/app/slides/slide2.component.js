import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Indicator from './indicator.component';

class Slide1 extends React.Component {
  render() {
    const id = 'slide-2';
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
        <section id="slide-2" className="slide parallax tech" style={style}>
          <article className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-block text-left">
                    <h4 className="card-title">Technology</h4>
                    <p className="card-text">I have been fortunate to work on many platforms and with many different technologies, the following barely scratches the surface!</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Windows 7, OSX Sierra &amp; Linux</li>
                    <li className="list-group-item">SQL Server, MySQL &amp; Postgres</li>
                    <li className="list-group-item">Visual Studio 2015, Netbeans &amp; Sublime</li>
                    <li className="list-group-item">Team Foundation Server, Heroku &amp; Github</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-block text-left">
                    <h4 className="card-title">This web page</h4>
                    <p className="card-text">I built this web page on the shoulders of giants! I use many modern methodologies to make all the magic happen.</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">AWS Web Services (EC2 &amp; S3)</li>
                    <li className="list-group-item">Nginx and NodeJS</li>
                    <li className="list-group-item">React 15 and Bootstrap 4 (Typescript &amp; Sass)</li>
                    <li className="list-group-item">Imagemagick and Homebrew</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row second">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-block text-left">
                    <p className="card-text">I always give a shout-out to the wonderful developer community out there that creates all the fantastic tools out there that I use, that make development fun. Thanks!</p>
                  </div>
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

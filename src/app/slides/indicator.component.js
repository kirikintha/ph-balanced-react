import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import SmoothScroll from '../shared/smooth-scroll.util';

class Indicator extends React.Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }
  scrollTo(e) {
    e.preventDefault();
    SmoothScroll.scrollTo(this.props.id);
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
        <div className="indicator">
          <button className="btn btn-default" alt="Scroll to see more!" title="Scroll to see more!" onClick={this.scrollTo}>
            <i className="fa fa-bolt" />
          </button>
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default Indicator;

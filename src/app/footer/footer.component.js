import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import each from 'lodash/each';
import { Button } from 'reactstrap';
import './footer.component.scss';
import AddThis from '../shared/add-this.component';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      classes: {
        btn: null,
        icon: 'fa fa-eye',
      },
    };
    this.toggleContent = this.toggleContent.bind(this);
  }
  toggleContent(e) {
    e.preventDefault();
    const selectors = '.slide > article, .the-work, .photos-wrapper, .indicator';
    const articles = document.querySelectorAll(selectors);
    const { open } = this.state;
    // Hide the content.
    each(articles, (article) => {
      article.classList.toggle('hidden-xs-up');
    });
    // Set the State.
    this.setState({
      open: !open,
      classes: {
        btn: (!open) ? null : 'btn-closed',
        icon: (!open) ? 'fa fa-eye' : 'fa fa-eye-slash',
      },
    });
  }
  render() {
    if (this.props.show) {
      return (
        <CSSTransitionGroup
          transitionName="fade-in"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionEnter
          transitionLeaveTimeout={300}
          transitionLeave
        >
          <footer>
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <AddThis />
                </div>
                <div className="col text-right">
                  <div className="btn-group" role="group" aria-label="Toggle content">
                    <Button
                      className={this.state.classes.btn}
                      type="button"
                      title="Toggle content"
                      alt="Toggle content"
                      onClick={this.toggleContent}
                    >
                      <i className={this.state.classes.icon} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </CSSTransitionGroup>
      );
    }
    return (
      <CSSTransitionGroup
        transitionName="fade-in"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionEnter
        transitionLeaveTimeout={300}
        transitionLeave
      />
    );
  }
}

export default Footer;

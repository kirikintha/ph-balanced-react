// App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './app.component.scss';
import Navigation from './navigation/navigation.component';
import Photos from './photos/photos.component';
import Slides from './slides/slides.component';
import Footer from './footer/footer.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFooter: true,
    };
    this.watchScroll();
  }
  watchScroll() {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 0) {
            this.setState({ showFooter: false });
          } else {
            this.setState({ showFooter: true });
          }
          ticking = false;
        });
      }
      ticking = true;
    });
  }
  render() {
    return (
      <div className="app">
        <Navigation />
        <Photos />
        <Slides />
        <Footer show={this.state.showFooter} />
      </div>
    );
  }
}

export default App;

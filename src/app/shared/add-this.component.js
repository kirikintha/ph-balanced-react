/* eslint-disable */
import React from 'react';
import isFunction from 'lodash/isFunction';

class AddThis extends React.Component {
  componentDidMount() {
    if (isFunction(addthis.layers.refresh)) {
      addthis.layers.refresh();
    }
  }
  render() {
    return (
      <div className="addthis_sharing_toolbox" />
    );
  }
}

export default AddThis;

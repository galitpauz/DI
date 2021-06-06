import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(hasError) {
    this.setState({ hasError });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className="card my-5">

        </div>
      );
    }
    return this.props.children;
  }
}

// ErrorBoundary.propTypes = {
//   children: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]).isRequired,
// };

import React from 'react';

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  };

  static getDerivedStateFromError() {
    console.log('error boundarey');
    return {hasError: true};
  }

  render() {
    return this.state.hasError 
    ? 
     (<p>Something went wrong</p>) 
    :
     (this.props.children)
  }
}

export default ErrorBoundary;


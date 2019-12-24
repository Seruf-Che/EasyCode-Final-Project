import React from "react";

class ErrorIndicator extends React.Component{
  
  state = {
    error: false
  };

  componentDidCatch(error) {
    this.setState({
      error
    })
  };

  onReloadHandler = () => {
    window.location.reload(true);
  };
  
  render(){
    if (this.state.error) return (
      <div className="error-indicator">
        <p>Sorry, something went wrong... :(</p>
        <div className="error-indicator__navigation">
          <button onClick={this.onReloadHandler} className={"button"}>Reload Page</button>
        </div>
      </div>
    )
    
    return this.props.children   
  };
};

export default ErrorIndicator;
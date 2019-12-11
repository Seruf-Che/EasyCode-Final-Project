import React from "react";
import {withRouter} from "react-router-dom"

class ErrorIndicator extends React.Component{
  
  state = {
    error: false
  }

  componentDidCatch(error) {
    this.setState({
      error
    })
  }

  onGoBackHandler = () => {
    this.props.history.goBack();
  }

  onGoHomeHandler = () => {
    this.props.history.push("/");
  }
  
  render(){
    if (this.state.error) return (
      <div className="error-indicator">
        <p>Sorry, something went wrong... :(</p>
        <div className="error-indicator__navigation">
          <button onClick={this.onGoBackHandler}>Go Back</button>
          <button onClick={this.onGoHomeHandler}>Go Home</button>
        </div>
      </div>
    )
    
    return this.props.children   
  }
}

export default withRouter(ErrorIndicator);
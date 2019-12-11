import React from "react";
import AppleService from "../../service/service";

const service = new AppleService();

const withService = (Wrapper) => {
  
  
  return class extends React.Component {
    render() {
      return <Wrapper {...this.props} service={service}/>
    }
  }
}

export default withService;
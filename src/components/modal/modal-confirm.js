import React from "react";
import Spinner from "../spinner/spinner";

class ModalCofirm extends React.Component {
  
  state = {
    loading: false
  }

  setLoading = (value) => {
    this.setState({loading: value});
  } 
  
  render() {
    const {close, text, callback} = this.props;
    const {loading} = this.state;
    
    return(
      <section className={"modal"} onClick={close}>
        <div
          className={"modal__inner modal__inner--prompt"}
          onClick={e => e.stopPropagation()}>
          {loading ? <Spinner />: ""}
          <div className="modal__body">
            <h1 className="modal__heading">{text}</h1>
          </div>
          <div className="modal__footer modal__footer--prompt">
            <button
              tabIndex={1}
              className="button"
              onClick={() => {callback(); this.setLoading(true);}}>Yes</button>
            <button
              tabIndex={2}
              className="button"
              onClick={close}>No</button>
          </div>
        </div>
      </section>
    )
  }
};

export default ModalCofirm;

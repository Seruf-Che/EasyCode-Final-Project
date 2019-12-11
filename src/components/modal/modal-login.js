import React from "react";
import withService from "../hoc/with-service";

class ModalLogin extends React.Component {

  state = {
    email: "",
    password: "",
    success: false,
    error: ""
  }

  onChangeHandler = (e) => {
    const {name, value} = e.currentTarget;
    this.setState({
      [name]: value
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const {email, password, success} = this.state;
    if(success) return;

    const {service, setUser} = this.props;

   service.logIn(email, password)
    .then(response => {
      if (response.status === -1) {
        this.setState({error: response.error})
      }
      else {
        setUser(response.user)
      }
    })

    console.log("Submited")

  }

  render() {
    const {close} = this.props;
    const {email, password, error, success} = this.state;

    return(
      <div className={"modal"} onClick={close}>
        <form
          className={"modal__inner"}
          onClick={e => e.stopPropagation()}
          onSubmit={this.onSubmitHandler}
          action="post">
          <div className="modal__header">
            <h2 className="modal__heading">Login</h2>
            <span
            onClick={close}
            className="modal__close">close</span>
          </div>
          <div className="modal__body">
            <input
              type="text"
              placeholder="Your email..."
              name="email"
              value={email}
              onChange={this.onChangeHandler}
              className="input"
              required/>
            <input
              type="password"
              placeholder="Your password..."
              name="password"
              value={password}
              onChange={this.onChangeHandler}
              className="input"
              required/>
          </div>
          <div className="modal__footer">
            <div className="modal__error">{error ? error : ""}</div>
            <button
              type="submit"
              className="button"
              disabled={success}>Log In</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withService(ModalLogin);

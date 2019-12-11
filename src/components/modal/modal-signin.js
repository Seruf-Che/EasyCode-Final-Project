import React from "react";
import withService from "../hoc/with-service";
import Spinner from "../spinner/spinner";

class ModalSignin extends React.Component {

  state = {
    email: "",
    password: "",
    success: false,
    last_name: "",
    first_name: "",
    phone: "",
    error: "",
    confirmPassword: "",
    loading: false
  }

  onChangeHandler = (e) => {
    const {name, value} = e.currentTarget;
    this.setState({
      [name]: value,
      error: ""
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    if(this.state.success) return;

    const {email, password, last_name, first_name,
      phone, confirmPassword} = this.state;
    const {service, setUser, signinUser, close} = this.props;

    if (password !== confirmPassword) {
      return this.setState({error: "Password and confirm password do not match"});
    }
    if (!first_name || !last_name || !phone || !email || !password || !confirmPassword ) {
      return this.setState({error: "Please fill in all fields"});
    }

    this.setState({loading: true});

    service.checkIn({first_name, last_name, phone, email, password, confirmPassword})
      .then(response => {
         if (response.status === -1) {
           this.setState({error: response.error})
         }
         else {
           signinUser(response.user);
           this.setState({success: true});
           service.logIn(email, password)
            .then(response => setUser(response.user));
            setTimeout(()=>close(), 1500);
         }
         this.setState({loading: false});
       }
     );
  }

  render() {
    const {close} = this.props;
    const {email, password, error, success, last_name, first_name,
      phone, confirmPassword, loading} = this.state;

    return(
      <div className={"modal"} onClick={close}>
        <form
          className={"modal__inner"}
          onClick={e => e.stopPropagation()}
          onSubmit={this.onSubmitHandler}
          action="post">
          {loading ? <Spinner />: ""}
          <div className="modal__header">
            <h2 className="modal__heading">Sign in</h2>
            <span
            onClick={close}
            className="modal__close">close</span>
          </div>
          <div className="modal__body">
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              value={first_name}
              onChange={this.onChangeHandler}
              className="input"
              required/>
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={last_name}
              onChange={this.onChangeHandler}
              className="input"
              required/>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.onChangeHandler}
              className="input"
              required/>
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={this.onChangeHandler}
              className="input"
              required/>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.onChangeHandler}
              className="input"
              required/>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.onChangeHandler}
              className="input"
              required/>
          </div>
          <div className="modal__footer">
            <div
              className={`modal__submit-response ${ error ? "modal__submit-response--error" : ""}`}>
              {error ? error : success ? "You have been succefully signed in" : ""}
            </div>
            <button
              type="submit"
              className="button"
              disabled={success}>Sign In</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withService(ModalSignin);

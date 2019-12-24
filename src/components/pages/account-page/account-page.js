import React from "react";
import Section from "../../wrappers-components/section/section";
import {connect} from "react-redux";
import withService from "../../hoc/with-service";
import {setUser, setUserModal} from "../../../actions/";

class AccountPage extends React.Component {

  state = {
    _id: this.props._id,
    first_name: this.props.first_name,
    last_name: this.props.last_name,
    phone: this.props.phone,
    email: this.props.email,
    address: this.props.address,
    password: "",
    new_password: "",
    newConfirmPassword: "",
    reason: "",
    success: false,
    isChanged: false
  }

  onChangeHandler = e => {
    const {name, value} = e.currentTarget;
    this.setState({
      [name]: value,
      reason: "",
      success: false,
      isChanged: true
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const {_id, first_name, last_name, phone, email, address, password,
      new_password, newConfirmPassword} = this.state;

    if (password) {
      if (new_password.length < 1) return this.setState({reason: "Please type new password"});
      if (new_password !== newConfirmPassword) return this.setState({reason: "Confirm password doesn't match"});
    }

    this.setState({success: true, isChanged: false});
    this.props.updateUser({_id, first_name, last_name, phone, email, address, password,
      new_password, newConfirmPassword});
    this.props.setUser({first_name, last_name, phone, email, address})
  }

  render() {
    const {first_name, last_name, phone, email, address, password,
      new_password, newConfirmPassword, reason, success, isChanged} = this.state;

    return (
      <main>
        <Section heading={`Hello ${this.props.first_name}`}>
          <form onSubmit={this.onSubmitHandler}>
            <label className={"form__label"}>Your First Name</label>
            <input
              type="text"
              placeholder={"First Name"}
              name="first_name"
              value={first_name}
              onChange={this.onChangeHandler}
              className="input"/>
            <label className={"form__label"}>Your Last Name</label>
            <input
              type="text"
              placeholder={"Last Name"}
              name="last_name"
              value={last_name}
              onChange={this.onChangeHandler}
              className="input"/>
            <label className={"form__label"}>Your Email</label>
            <input
              type="email"
              placeholder={"Email"}
              name="email"
              autoComplete="email"
              value={email}
              onChange={this.onChangeHandler}
              className="input"/>
            <label className={"form__label"}>Your Phone Number</label>
            <input
              type="text"
              placeholder={"Phone number"}
              name="phone"
              autoComplete="phone"
              value={phone}
              onChange={this.onChangeHandler}
              className="input"/>
            <label className={"form__label"}>Your Address</label>
            <input
              type="text"
              placeholder={"Address"}
              name="address"
              autoComplete="address"
              value={address}
              onChange={this.onChangeHandler}
              className="input"/>
            <label className={"form__label"}>If you want to change your
            password, please fill the following fields:</label>
            <input
              type="password"
              placeholder="Current password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={this.onChangeHandler}
              className="input"/>
            <input
              type="password"
              placeholder="New Password"
              name="new_password"
              autoComplete="current-password"
              value={new_password}
              onChange={this.onChangeHandler}
              disabled={!password}
              className="input"/>
            <input
              type="password"
              placeholder="Confirm new password"
              name="newConfirmPassword"
              autoComplete="current-password"
              value={newConfirmPassword}
              onChange={this.onChangeHandler}
              disabled={!password}
              className="input"/>
            <div
              className={`account__submit-response
                ${ reason ? "account__submit-response--error" : ""}`}>
              {reason ? reason : success ? "Changes were successfully applied" : ""}
            </div>
            <button
              type={"submit"}
              className={"account__button button"}
              disabled={!isChanged}>Apply changes</button>
          </form>
          <button
            onClick={this.props.setModal}
            className={"account__button button button--danger"}>Delete account</button>
        </Section>
      </main>
    )
  }
}

const mapStateToProsp = ({user}) => {
  const {_id, first_name, last_name, phone, email, address} = user;
  return {_id, first_name, last_name, phone, email, address}
}

const mapStateToDispatch = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
    setModal: () => dispatch(setUserModal("OPEN_DELETE_CONFIRM_MODAL")),
    updateUser: (user) => dispatch("UPDATE_USER", user)//customize THE FUNCTION
  }
}

export default
  withService(
    connect(mapStateToProsp, mapStateToDispatch)(AccountPage)
  );

import React from "react";
import Section from "../../wrappers-components/section/section";
import {connect} from "react-redux";
import withService from "../../hoc/with-service";

class AccountPage extends React.Component {

  state = {
    first_name: this.props.first_name,
    last_name: this.props.last_name,
    phone: this.props.phone,
    email: this.props.email,
    address: this.props.address,
    password: "",
    newPassword: "",
    newConfirmPassword: "",
    reason: "",
    success: "",
    isChanged: false
  }

  onChangeHandler = e => {
    const {name, value} = e.currentTarget;
    this.setState({
      [name]: value,
      reason: "",
      isChanged: true
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const {first_name, last_name, phone, email, address, password,
      newPassword, newConfirmPassword} = this.state;

    if (password) {
      if (newPassword.length < 1) return this.setState({reason: "Please type new password"});
      if (newPassword !== newConfirmPassword) return this.setState({reason: "Confirm password doesn't match"});
    }

    this.setState({success: true})
  }


  render() {
    const {first_name, last_name, phone, email, address, password,
      newPassword, newConfirmPassword, reason, success, isChanged} = this.state;
    return (
      <main>
        <Section heading={`Hello ${"name"}`}>
          <form onSubmit={this.onSubmitHandler}>
            <input
              type="text"
              placeholder={"First Name"}
              name="first_name"
              value={first_name}
              onChange={this.onChangeHandler}
              className="input"/>
            <input
              type="text"
              placeholder={"Last Name"}
              name="last_name"
              value={last_name}
              onChange={this.onChangeHandler}
              className="input"/>
            <input
              type="email"
              placeholder={"Email"}
              name="email"
              autoComplete="email"
              value={email}
              onChange={this.onChangeHandler}
              className="input"/>
            <input
              type="text"
              placeholder={"Phone number"}
              name="phone"
              autoComplete="phone"
              value={phone}
              onChange={this.onChangeHandler}
              className="input"/>
            <input
              type="text"
              placeholder={"Address"}
              name="address"
              autoComplete="address"
              value={address}
              onChange={this.onChangeHandler}
              className="input"/>
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
              name="newPassword"
              autoComplete="current-password"
              value={newPassword}
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
              className={`account__submit-response ${ reason ? "account__submit-response--error" : ""}`}>
              {reason ? reason : success ? "Changes were successfully applied" : ""}
            </div>
            <button
              type={"submit"}
              className={"button"}
              disabled={!isChanged}>Apply changes</button>
          </form>
        </Section>
      </main>
    )
  }
}

const mapStateToProsp = ({user}) => {
  const {first_name, last_name, phone, email, address} = user;
  return {first_name, last_name, phone, email, address}
}

export default
  withService(
    connect(mapStateToProsp)(AccountPage)
  );

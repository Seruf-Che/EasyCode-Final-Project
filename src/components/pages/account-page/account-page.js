import React from "react";
import Section from "../../wrappers-components/section/section";
import {connect} from "react-redux";

const AccountPage = ({first_name, last_name, phone, email, address}) => {
  return (
    <main>
      <Section heading={`Hello ${"name"}`}>
        <form>
        <input
          type="text"
          placeholder={first_name}
          name="first_name"
          value={""}
          onChange={()=> console.log("changed")}
          className="input"/>
        <input
          type="text"
          placeholder={last_name}
          name="last_name"
          value={""}
          onChange={()=> console.log("changed")}
          className="input"/>
        <input
          type="email"
          placeholder={email}
          name="email"
          autoComplete="email"
          value={""}
          onChange={()=> console.log("changed")}
          className="input"/>
        <input
          type="text"
          placeholder={phone}
          name="phone"
          autoComplete="phone"
          value={""}
          onChange={()=> console.log("changed")}
          className="input"/>
        <input
          type="text"
          placeholder={address ? address : "Type your address"}
          name="address"
          autoComplete="address"
          value={""}
          onChange={()=> console.log("changed")}
          className="input"/>
        <input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="current-password"
          value={""}
          onChange={()=> console.log("changed")}
          className="input"/>
        <input
          type="password"
          placeholder="Confirm Password"
          name="newPassword"
          autoComplete="current-password"
          value={""}
          onChange={()=> console.log("changed")}
          className="input"/>
        <input
          type="password"
          placeholder="Confirm Password"
          name="newConfirmPassword"
          autoComplete="current-password"
          value={""}
          onChange={()=> console.log("changed")}
          className="input"/>
        </form>
      </Section>
    </main>
  )
}

const mapStateToProsp = ({user}) => {
  const {first_name, last_name, phone, email, address} = user;
  return {
    first_name, last_name, phone, email, address
  }
}

export default connect(mapStateToProsp)(AccountPage);

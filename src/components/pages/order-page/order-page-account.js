import React from "react";

const OrderPageAccount = ({user = {}, onChangeHandler}) => {
  const {first_name, last_name = "", phone, email, address} = user;
  return (
    <form className={"order-page__account"}>
      <label className={"form__label"}>Your First Name*</label>
      <input
        required
        type="text"
        placeholder={"First Name"}
        name="first_name"
        value={first_name}
        onChange={onChangeHandler}
        className="input"/>
      <label className={"form__label"}>Your Last Name*</label>
      <input
        required
        type="text"
        placeholder={"Last Name"}
        name="last_name"
        value={last_name}
        onChange={onChangeHandler}
        className="input"/>
      <label className={"form__label"}>Your Email*</label>
      <input
        required
        type="email"
        placeholder={"Email"}
        name="email"
        autoComplete="email"
        value={email}
        onChange={onChangeHandler}
        className="input"/>
      <label className={"form__label"}>Your Phone Number*</label>
      <input
        required
        type="text"
        placeholder={"Phone number"}
        name="phone"
        autoComplete="phone"
        value={phone}
        onChange={onChangeHandler}
        className="input"/>
      <label className={"form__label"}>Your Address*</label>
      <input
        required
        type="text"
        placeholder={"Address"}
        name="address"
        autoComplete="address"
        value={address}
        onChange={onChangeHandler}
        className="input"/>
    </form>
  )
}

export default OrderPageAccount;
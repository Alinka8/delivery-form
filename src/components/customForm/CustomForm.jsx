import "./customForm.style.css";
import React, { useState } from "react";

const defaultCustomForm = {
  FirstName: "",
  LastName: "",
  Address: "",
  Date: "",
  PhoneNumber: "",
  CheckBox: false,
};

const CustomForm = () => {
  const [deliveryData, setDeliveryData] = useState(defaultCustomForm);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(deliveryData);
  };
  //props separate key and value
  const onChangeHandler = (e) => {
    setDeliveryData({ ...deliveryData, [e.target.name]: e.target.value });
  };

  const onCheckHandler = (e) => {
    setDeliveryData({ ...deliveryData, CheckBox: e.target.checked });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="form">
          <h1>Delivery Form</h1>
          <label forHtml="FirstName"> Name </label>
          <input
            name="FirstName"
            placeholder="First Name"
            onChange={onChangeHandler}
          />
          <input
            name="LastName"
            placeholder="Last Name"
            onChange={onChangeHandler}
          />
          <label forHtml="Address"> Address</label>
          <input
            name="Address"
            placeholder="street, city, state..."
            onChange={onChangeHandler}
          />
          <label forHtml="Date"> Delivery date </label>
          <input name="Date" type="date" onChange={onChangeHandler} />
          <label forHtml="PhoneNumber">Phone number</label>
          <input
            name="PhoneNumber"
            type="number"
            placeholder="224-8573-2673"
            onChange={onChangeHandler}
          />
          <label forHtml="CheckBox">Check box</label>
          <input name="CheckBox" type="checkbox" onChange={onCheckHandler} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CustomForm;

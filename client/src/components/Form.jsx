import React, { useContext } from "react";
import { Transaction } from "../context/Transaction";

const Input = ({ placeholder, name, type, value, handleChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      step="0.00001"
      value={value}
      onChange={(e) => handleChange(e, name)}
    />
  );
};

const Form = () => {
  const { formData, sendTransaction, handleChange, isLoading } =
    useContext(Transaction);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <form>
      <legend>Send Funds</legend>

      <Input
        type="text"
        placeholder="Sending To"
        name="addressTo"
        handleChange={handleChange}
      />
      <Input
        type="number"
        placeholder="Amount (ETH)"
        name="amount"
        handleChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Keyword"
        name="keyword"
        handleChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Message"
        name="message"
        handleChange={handleChange}
      />

      {isLoading ? (
        "Sending"
      ) : (
        <button onClick={(e) => handleSubmit(e)}>Send</button>
      )}
    </form>
  );
};

export default Form;

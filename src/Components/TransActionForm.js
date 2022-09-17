import { useState } from "react";

const TransActionForm = ({addTransaction , setIsShow}) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    addTransaction(formValues);
    setIsShow(false);
  }

  return (
    <form onSubmit={submitHandler} className="form">
      <input
      className="input"
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValues.desc}
        placeholder="Description"
      />
      <input 
      className="input"
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValues.amount}
        placeholder="Amount"
      />
      <div className="radioBox">
        <input
          type="radio"
          value="expense"
          checked={formValues.type==="expense"}
          name="type"
          onChange={changeHandler}
          id="expense"
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          value="income"
          checked={formValues.type==="income"}
          name="type"
          onChange={changeHandler}
          id="income"
        />
        <label htmlFor="income">Income</label>
      </div>
      <button className="btn primary" type="submit">Add Transaction</button>
    </form>
  );
};

export default TransActionForm;

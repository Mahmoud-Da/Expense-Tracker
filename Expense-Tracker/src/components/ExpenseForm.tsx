import React from "react";
import { categories } from "../App";

const ExpenseForm = () => {
  return (
    <>
      <form action="">
        <div className="mb-3">
          <label htmlFor="desciption" className="form-label">
            Desciption
          </label>
          <input id="desciption" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input id="amount" type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-lable">
            Category
          </label>
          <select id="category" className="form-select">
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;

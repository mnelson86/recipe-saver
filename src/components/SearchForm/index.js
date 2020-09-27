import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search row justify-content-center">
      <div className="from-group col-6">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="user-name"
          list="users"
          type="text"
          className="form-control"
          placeholder="Search for users"
          id="user-name"
        />
        <datalist id="users">
          {props.users.map((user) => (
            <option value={user.name} key={user.id} />
          ))}
        </datalist>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-light"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;


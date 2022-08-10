import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";

const INITIAL_STATE = {
  username: "",
  email: ""
};

const AddUser = () => {
  const AddUser = useStoreActions((actions) => actions.users.AddUser);
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    AddUser(state)
    setState({ ...INITIAL_STATE });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h3>Create new User</h3>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input type="submit" value={"Create New User"} />
        </div>
      </form>
    </>
  );
};

export default AddUser;

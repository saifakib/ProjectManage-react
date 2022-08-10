import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";

const INITIAL_STATE = {
  title: "",
  descriptions: "",
  tasks: [],
};

const AddProjectForm = () => {
  const AddProject = useStoreActions((actions) => actions.projects.AddProject);
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    AddProject(state)
    setState({ ...INITIAL_STATE });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h3>Create new Project</h3>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={state.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Descriptions: </label>
          <input
            type="text"
            name="descriptions"
            value={state.descriptions}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input type="submit" value={"Create New Project"} />
        </div>
      </form>
    </>
  );
};

export default AddProjectForm;

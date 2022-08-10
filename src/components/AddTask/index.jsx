import React, { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { deepClone } from "../../utils/object-utils";
import gen from "../../utils/taskIdGenerator";


const INIT_TASK = {
    text: "",
    status: true,
    deadline: "",
    tasks: [],
    assign: "",
  };
  const AddTask = ({ id, project }) => {
    const [state, setState] = useState({ ...INIT_TASK });
    const users = useStoreState((state) => state.users.users)
    const AddTask = useStoreActions((actions) => actions.tasks.AddTask);
    const UpdateProject = useStoreActions((actions) => actions.projects.UpdateProject);
  
    const handleInputChange = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    };
    const handleFormSubmit = (event) => {
      event.preventDefault();
      let taskid = gen.next().value;
      AddTask({ id: taskid, data: state});
      let oldState = deepClone(project);
      oldState.tasks.push(taskid);
      UpdateProject({ id: id, data: oldState})
      setState({ ...INIT_TASK });
    };
  
    return (
      <>
        <form onSubmit={handleFormSubmit}>
          <h3>Create new Task for {project.title}</h3>
          <div>
            <label htmlFor="text">Text: </label>
            <input
              type="text"
              name="text"
              value={state.text}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="deadline">Deadline: </label>
            <input
              type="date"
              name="deadline"
              value={state.deadline}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="status">Status: </label>
            <select name="status" onChange={handleInputChange}>
                <option value="Pending">Pending</option>
                <option value="Done">Done</option>
            </select>
          </div>
          <div>
            <label htmlFor="assign">Assign: </label>
            <select name="assign" onChange={handleInputChange}>
                { Object.keys(users).map((id) => (
                    <option key={id} value={id}>{users[id].username}</option>
                ))}
            </select>
          </div>
          <div>
            <input type="submit" value={"Create New Task"} />
          </div>
        </form>
      </>
    );
  };

  export default AddTask;
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
  const AddSubTask = ({ id }) => {
    const [task, users] = useStoreState((state) => [state.tasks.tasks[id], state.users.users])
    const [state, setState] = useState({ ...INIT_TASK });
    const [AddTask, UpdateTask] = useStoreActions((actions) => [actions.tasks.AddTask, actions.tasks.UpdateTask]);
  
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
      let oldTask = deepClone(task);
      oldTask.tasks.push(taskid);
      UpdateTask({ id: id, data: oldTask})
      setState({ ...INIT_TASK });
    };
  
    return (
      <>
        <form onSubmit={handleFormSubmit}>
          <h3>Create new Task for {task.text}</h3>
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
            <label htmlFor="user">Assign: </label>
            <select name="user" onChange={handleInputChange}>
                { Object.keys(users).map((id) => (
                    <option value={id}>{users[id].username}</option>
                ))}
            </select>
          </div>
          <div>
            <input type="submit" value={"Create New Sub Task"} />
          </div>
        </form>
      </>
    );
  };

  export default AddSubTask;
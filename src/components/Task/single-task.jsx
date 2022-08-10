import React, { useState } from "react";
import { useStoreState } from "easy-peasy";
import AddSubTask from "../AddSubTask";
import Tasks from ".";

const SingleTask = ({ id }) => {
  let tasksState = useStoreState((state) => state.tasks.tasks);
  let [click, setClick] = useState(false);
  const { text, status, deadline, tasks, assign } = tasksState[id]
  let user = useStoreState((state) => state.users.users[assign]);
  return (
    <>
      {text} -- {status} -- {deadline} -- {user && user.username}
      {tasks.length > 0 && <Tasks tasks={tasks} />}
      {click && <AddSubTask id={id} />}
      <button onClick={() => setClick(!click)}>Add Task</button>
    </>
  );
};

export default SingleTask;

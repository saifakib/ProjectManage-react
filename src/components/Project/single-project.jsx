import React, { useState } from "react";
import { useStoreState } from "easy-peasy";
import AddTask from "../AddTask";
import Tasks from '../Task'

const SingleProject = ({ id }) => {
  let projects = useStoreState((state) => state.projects.projects);
  const { title, descriptions, tasks } = projects[id];
  let [click, setClick] = useState(false);
  return (
    <>
      { title } -- { descriptions }
      { tasks.length > 0 && <Tasks tasks={tasks}/>}
      {click && <AddTask id={id} project={projects[id]} />}
      <button onClick={() => setClick(!click)}>Add Task</button>
    </>
  );
};

export default SingleProject;

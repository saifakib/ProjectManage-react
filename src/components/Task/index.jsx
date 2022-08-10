import React from "react";

import SingleTask from "./single-task";

const Tasks = ({ tasks }) => {
  return (
    <>
      <h3>Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task}>
            <SingleTask id={task} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;

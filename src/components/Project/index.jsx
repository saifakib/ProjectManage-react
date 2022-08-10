import React from "react";
import { useStoreState } from "easy-peasy";
import SingleProject from "./single-project";

const Projects = () => {
  let projects = useStoreState((state) => state.projects.projects);
  return (
    <>
      <h3>Project Lists</h3>
      <ul>
        {Object.keys(projects).map((id, index) => (
          <li key={index}>
            <SingleProject id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Projects;

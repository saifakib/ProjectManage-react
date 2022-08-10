import React, { useState } from 'react';
import { Box, TextField, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useStoreActions } from "easy-peasy";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const INITIAL_STATE = {
  title: "",
  descriptions: "",
  tasks: [],
};

const ProjectModalInput = ({ open, handleClose }) => {

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
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form onSubmit={handleFormSubmit}>
            <h3>Create new Project</h3>
            <TextField
                fullWidth
                label="Project Title"
                variant="outlined"
                name="title"
                value={state.title}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                label="Project Description"
                variant="outlined"
                name="descriptions"
                value={state.descriptions}
                onChange={handleInputChange}
              />
            <div>
              <Button type="submit" variant="contained" sx={{ my: 2}}>Create New Project</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default ProjectModalInput;

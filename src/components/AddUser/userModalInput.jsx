import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useStoreActions } from "easy-peasy";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const INITIAL_STATE = {
  username: "",
  email: "",
};

const UserModalInput = ({ open, handleClose }) => {
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
    AddUser(state);
    setState({ ...INITIAL_STATE });
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form onSubmit={handleFormSubmit}>
            <h3>Create new User</h3>
            <TextField
                fullWidth
                label="Username"
                variant="outlined"
                name="username"
                value={state.username}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                name="email"
                value={state.email}
                onChange={handleInputChange}
              />
            <div>
              <Button type="submit" variant="contained" sx={{ my: 2}}>Create New User</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UserModalInput;
 
import React, { useState } from 'react';
import {AppBar, Box, Toolbar, Typography,Button, Container, Stack } from "@mui/material";
import UserModalInput from '../AddUser/UserModalInput';
import ProjectModalInput from '../AddProject/projectModalInput';

const Navbar = () => {
  const [openU, setOpenU] = useState(false);
  const handleU = () => setOpenU(!openU);
  const [openP, setOpenP] = useState(false);
  const handleP = () => setOpenP(!openP);
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" sx={{ py: 1 }}>
        <Container maxWidth={'md'}>
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
                <Typography variant="h4" color={'#4a148c'}>................</Typography>
            </Stack>
            <Button onClick={handleP} color="inherit">Add Project</Button>
            <ProjectModalInput open={openP} handleClose={handleP} />
            <Button onClick={handleU} color="inherit">Add User</Button>
            <UserModalInput open={openU} handleClose={handleU} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
    </>
  );
}

export default Navbar;

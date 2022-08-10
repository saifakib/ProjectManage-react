import React from 'react';
import {AppBar, Box, Toolbar, Typography,Button, Container, Stack } from "@mui/material";

const Navbar = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" sx={{ py: 1 }}>
        <Container maxWidth={'md'}>
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
                <Typography variant="h4" color={'#4a148c'}>................</Typography>
            </Stack>
            <Button color="inherit">Add Project</Button>
            <Button color="inherit">Add User</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
    </>
  );
}

export default Navbar;

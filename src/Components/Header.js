import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Box width="80%">
          <h1>Books</h1>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Header;

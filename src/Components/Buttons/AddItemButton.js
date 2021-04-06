import React from "react";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const AddItemBtn = withStyles((theme) => ({
  root: {
    width: 120,
    color: "#fff",
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

function AddItemButton(props) {
  return (
    <AddItemBtn onClick={props.open} disableElevation>
      Add Item
    </AddItemBtn>
  );
}

export default AddItemButton;

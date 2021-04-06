import React from "react";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const AddBtn = withStyles((theme) => ({
  root: {
    color: "#fff",
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

function AddButton(props) {
  return (
    <AddBtn
      onSubmit={props.close}
      type="submit"
      size="small"
      form="addForm"
      disableElevation
    >
      Submit
    </AddBtn>
  );
}

export default AddButton;

import React from "react";
import Button from "@material-ui/core/Button";
import { red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const DeleteBtn = withStyles((theme) => ({
  root: {
    marginLeft: 15,
    color: "#fff",
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  },
}))(Button);

function DeleteButton(props) {
  return (
    <DeleteBtn onClick={props.deleteBook} size="small" disableElevation>
      Delete
    </DeleteBtn>
  );
}

export default DeleteButton;

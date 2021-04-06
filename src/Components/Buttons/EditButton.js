import React from "react";
import Button from "@material-ui/core/Button";
import { yellow } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const EditBtn = withStyles((theme) => ({
  root: {
    backgroundColor: yellow[700],
    "&:hover": {
      backgroundColor: yellow[800],
      color: "#000",
    },
  },
}))(Button);

function EditButton(props) {
  return (
    <EditBtn
      onClick={() => props.edit(props.book)}
      size="small"
      disableElevation
    >
      Edit
    </EditBtn>
  );
}

export default EditButton;

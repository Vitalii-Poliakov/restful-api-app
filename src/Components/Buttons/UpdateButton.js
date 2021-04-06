import React from "react";
import Button from "@material-ui/core/Button";
import { yellow } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const UpdateBtn = withStyles((theme) => ({
  root: {
    backgroundColor: yellow[700],
    "&:hover": {
      backgroundColor: yellow[800],
      color: "#000",
    },
  },
}))(Button);

function UpdateButton(props) {
  return (
    <UpdateBtn
      onSubmit={props.close}
      type="submit"
      size="small"
      form="updateForm"
      disableElevation
    >
      Update
    </UpdateBtn>
  );
}

export default UpdateButton;

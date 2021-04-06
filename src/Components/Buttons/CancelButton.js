import React from "react";
import Button from "@material-ui/core/Button";

function CancelButton(props) {
  return (
    <Button
      onClick={props.close}
      size="small"
      variant="contained"
      disableElevation
    >
      Cancel
    </Button>
  );
}

export default CancelButton;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Edit from "../Edit";

function getModalStyle() {
  return {
    top: `20%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "90%",
    maxWidth: 600,
    position: "absolute",
    outline: "none",
    backgroundColor: theme.palette.background.paper,
  },
}));

function EditItemModal(props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <Modal open={props.open} onClose={props.close}>
      <Fade in={props.open}>
        <Edit
          style={modalStyle}
          class={classes.paper}
          event={props.event}
          length={props.length}
          lastBook={props.lastBook}
          bookHandler={props.bookHandler}
          bookInfo={props.bookInfo}
        />
      </Fade>
    </Modal>
  );
}

export default EditItemModal;

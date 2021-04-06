import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import AddButton from "./Buttons/AddButton";
import CancelButton from "./Buttons/CancelButton";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
function Add(props) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const classes = useStyles();

  function addNewObj(e) {
    e.preventDefault();
    let newId;
    if (props.length !== 0) {
      newId = props.lastBook.id + 1;
    } else {
      newId = 1;
    }

    let obj = { id: newId, title: title, rating: rating };
    if (title === "" || rating === "") alert("Please fill out all the fields");
    else if (rating < 0 || rating > 10)
      alert("Please assign rating between 0 and 10");
    else {
      props.bookHandler(obj);
      props.event(false);
    }
  }

  return (
    <Box style={props.style} className={props.class}>
      <Box display="flex" justifyContent="space-between" py={1} px={2}>
        <h2>Add a Book</h2>

        <Box my="auto">
          <CloseIcon onClick={props.event} />
        </Box>
      </Box>
      <Divider />
      <Box p={1}>
        <form noValidate autoComplete="off" onSubmit={addNewObj} id="addForm">
          <Box mx={1} my={2}>
            <TextField
              id="outlined-basic"
              size="small"
              label="Title"
              fullWidth
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>
          <Box mx={1} my={2}>
            <TextField
              id="outlined-basic"
              label="Rating"
              type="number"
              size="small"
              fullWidth
              variant="outlined"
              inputProps={{ min: "0", max: "10", step: "1" }}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </Box>
          <Box className={classes.root}>
            <AddButton close={props.event} />
            <CancelButton close={props.event} />
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Add;

import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import UpdateButton from "../Components/Buttons/UpdateButton";
import CancelButton from "../Components/Buttons/CancelButton";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Edit(props) {
  const classes = useStyles();
  const [title, setTitle] = useState(props.bookInfo.title);
  const [rating, setRating] = useState(props.bookInfo.rating);

  function updateBook(e) {
    e.preventDefault();
    let obj = { id: props.bookInfo.id, title: title, rating: rating };
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
        <h2>Update {props.bookInfo.title}</h2>

        <Box my="auto">
          <CloseIcon onClick={props.event} />
        </Box>
      </Box>
      <Divider />
      <Box p={1}>
        <form
          noValidate
          autoComplete="off"
          id="updateForm"
          onSubmit={updateBook}
        >
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
            <UpdateButton close={props.event} />
            <CancelButton close={props.event} />
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Edit;

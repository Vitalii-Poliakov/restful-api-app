import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import EditButton from "../Components/Buttons/EditButton";
import DeleteButton from "../Components/Buttons/DeleteButton";
import { makeStyles } from "@material-ui/core/styles";

const useBtnStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Card(props) {
  const { id, title, rating } = props.book;
  const classes = useBtnStyles();
  return (
    <TableRow className={classes.root}>
      <TableCell>{id}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{rating}</TableCell>
      <TableCell>
        <EditButton
          bookForUpdate={props.bookForUpdate}
          close={props.close}
          edit={props.edit}
          book={props.book}
          size="small"
          label={"Edit"}
          disableElevation
        />
        <DeleteButton
          deleteBook={() => props.clickHandler(id)}
          size="small"
          disableElevation
        >
          Delete
        </DeleteButton>
      </TableCell>
    </TableRow>
  );
}

export default Card;

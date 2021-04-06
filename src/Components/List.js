import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Card from "./Card";

import Box from "@material-ui/core/Box";

function List(props) {
  const deleteBookHandler = (id) => {
    props.getBookId(id);
  };

  const renderCards = props.books.map((book) => {
    return (
      <Card
        key={book.id}
        book={book}
        clickHandler={deleteBookHandler}
        edit={props.handleEdit}
        close={props.event}
        bookForUpdate={props.bookForUpdate}
      />
    );
  });

  return (
    <Box mx="auto">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell wdth="20%">Title</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderCards}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default List;

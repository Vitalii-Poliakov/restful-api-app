import React, { useState, useEffect } from "react";
import List from "./Components/List";
import Header from "./Components/Header";
import AddItemModal from "./Components/Modals/AddItemModal";
import EditItemModal from "./Components/Modals/EditItemModal";
import AddItemButton from "./Components/Buttons/AddItemButton";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import axios from "axios";
const LOCAL_STORAGE_KEY = "books";
const URL = "https://restful-book-server.herokuapp.com/books";
function App() {
  const [books, setBooks] = useState([]);
  const [openAdd, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [bookUpdate, setBookUpdate] = useState({});
  /*******************************************************************/
  const retrieveBooks = async () => {
    const response = await axios.get(URL);
    return response.data;
  };
  /*******************************************************************/
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleOpenEdit = (book) => {
    setBookUpdate(book);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => setOpenEdit(false);
  /*******************************************************************/
  const addBookHandler = async (book) => {
    const request = {
      ...book,
    };
    const response = await axios.post(URL, request);
    setBooks([...books, response.data]);
  };

  const updateBookHandler = async (book) => {
    const response = await axios.put(`${URL}/${book.id}`, book);
    const { id, title, rating } = response.data;
    setBooks(
      books.map((book) => {
        if (book.id === id) return { ...response.data };
        else return book;
      })
    );
  };

  const deleteBookHandler = async (id) => {
    await axios.delete(`${URL}/${id}`);
    const newBookList = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(newBookList);
  };
  /*******************************************************************/
  useEffect(() => {
    const getAllBooks = async () => {
      const allBooks = await retrieveBooks();
      if (allBooks) setBooks(allBooks);
    };
    getAllBooks();
  }, []);

  //add use effect for local storage

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
  }, [books]);
  /*******************************************************************/
  function setContent() {
    if (books.length > 0)
      return (
        <List
          books={books}
          getBookId={deleteBookHandler}
          handleEdit={handleOpenEdit}
        />
      );
    else return <h1>This is a CRUD RESTful API application.</h1>;
  }
  /*******************************************************************/
  return (
    <Box width="100%">
      <Header />
      <Container>
        <Box
          my={2}
          display="flex"
          justifyContent="space-between"
          className="list-header"
        >
          <h1>Book List</h1>
          <AddItemButton open={handleOpen} />
          <AddItemModal
            open={openAdd}
            event={handleClose}
            length={books.length}
            lastBook={books.slice(-1)[0]}
            bookHandler={addBookHandler}
          />
          <EditItemModal
            open={openEdit}
            event={handleCloseEdit}
            lastBook={books.slice(-1)[0]}
            bookInfo={bookUpdate}
            bookHandler={updateBookHandler}
          />
        </Box>
        {setContent()}
      </Container>
    </Box>
  );
}

export default App;

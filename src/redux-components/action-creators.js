export const ADD_BOOK = 'ADD_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const addBook = bookInfoObj => {
  return {
    type: ADD_BOOK,
    data: bookInfoObj
  };
};

export const editBook = (idx, data) => {
  return {
    type: EDIT_BOOK,
    data,
    idx
  };
};

export const deleteBook = idx => {
  return {
    type: DELETE_BOOK,
    idx
  };
};

export const toggleModal = _ => {
  return {
    type: TOGGLE_MODAL
  };
};

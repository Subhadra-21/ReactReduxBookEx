import React from 'react';
import { useSelector, useStore, useDispatch } from 'react-redux';
import Book from './Book.js';
import AddBookForm from './AddBookForm.js';
import { toggleModal } from '../redux-components/action-creators';

export default function BookContainer(props) {
  console.log(props);
  const store = useStore();
  console.log(store);
  const books = useSelector(storeState => storeState.books);
  const showModal = useSelector(storeState => storeState.showModal);
  const dispatch = useDispatch();
  // const books = props.books;
  return (
    <div className="book-container">
      <div className="add-btn">
        <button
          onClick={() => {
            dispatch(toggleModal());
          }}
        >
          Add Book
        </button>
      </div>
      <br />
      {books.map((book, idx) => {
        return <Book {...book} idx={idx} key={idx} />;
      })}
      {showModal && <AddBookForm />}
    </div>
  );
}

// var mapStateToProps = state => ({
//   books: state.books
// });

// export default connect(mapStateToProps)(BookContainer);

import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux-components/action-creators';

export default function Book(props) {
  var dispatch = useDispatch();
  return (
    <div className="bookItem">
      <button
        className="delete-btn"
        onClick={() => {
          dispatch(deleteBook(props.idx));
        }}
      >
        X
      </button>
      <br />
      <div className="bookItemdiv">
        <h2 className="book-heading">{props.title}</h2>
        <hr />
        <div className="book-desc">
          <p>
            <img className="book-cover-pic" src={props.img} alt="image" />
            {props.desc}
          </p>
        </div>
        <hr />
        <div>Author: {props.author}</div>
      </div>
    </div>
  );
}

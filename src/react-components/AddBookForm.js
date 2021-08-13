import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux-components/action-creators';

export default function AddBookForm(props) {
  const [formdata, setform] = useState({});
  const dispatch = useDispatch();
  function handleChange(e) {
    var prop = e.target.dataset.propName;
    var newState = { ...formdata, [prop]: e.target.value };
    setform(newState);
  }

  function handleFileChange(e) {
    var prop = e.target.dataset.propName;
    var file = URL.createObjectURL(e.target.files[0]);
    var newState = { ...formdata, [prop]: file };
    setform(newState);
  }

  const submitData = function(e) {
    e.preventDefault();
    dispatch(addBook(formdata));
  };

  return (
    <div className="form-book-modal">
      <div className="form-book-div">
        <form onSubmit={submitData}>
          <div className="form-grp">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={formdata.title}
              data-prop-name="title"
              onChange={handleChange}
            />
          </div>
          <div className="form-grp">
            <label htmlFor="desc">Description</label>
            <textarea
              id="desc"
              value={formdata.desc}
              data-prop-name="desc"
              onChange={handleChange}
            />
          </div>
          <div className="form-grp">
            <label htmlFor="photo">Cover Photo</label>
            <input
              id="photo"
              type="file"
              onChange={handleFileChange}
              data-prop-name="img"
              accept="image/*"
            />
          </div>
          <div className="form-grp">
            <label htmlFor="author">Author</label>
            <input
              id="author"
              type="text"
              value={formdata.author}
              data-prop-name="author"
              onChange={handleChange}
            />
          </div>
          <div className="form-grp">
            <input type="submit" value="Add Book" />
          </div>
        </form>
      </div>
    </div>
  );
}

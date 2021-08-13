import * as actions from './action-creators.js';
import {
  createStore,
  bindActionCreators,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';

import { createLogger } from 'redux-logger';

const initialState = {
  books: [
    {
      title: 'Train',
      desc:
        'A train is a form of rail transport consisting of a series of connected vehicles that generally run along a railroad (or railway) track to transport passengers or cargo (also known as "freight" or "goods"). The word train comes from the Old French trahiner, derived from the Latin trahere meaning \'to pull, to draw\'.[1] Motive power for a train is provided by a separate locomotive or individual motors in a self-propelled multiple unit. The term "engine" is often used as an alternative to locomotive. Although historically steam propulsion dominated, the most common types of locomotive are diesel and electric, the latter supplied by overhead wires or additional rails. Trains can also be hauled by horses, pulled by engine or water-driven cable or wire winch, run downhill using gravity, or powered by pneumatics, gas turbines or electric batteries.',
      author: 'Subhadra',
      img: 'https://js.cx/clipart/train.gif'
    }
  ],
  showModal: false
};

function reducesFun(state = initialState, action) {
  console.log('reducer called');
  switch (action.type) {
    case actions.ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.data],
        showModal: false
      };
    case actions.EDIT_BOOK: {
      const { data, idx } = action;
      return {
        ...state,
        books: [
          ...state.books.slice(0, idx),
          data,
          ...state.books.slice(idx + 1)
        ]
      };
    }
    case actions.DELETE_BOOK:
      const { idx } = action;
      return {
        ...state,
        books: [...state.books.slice(0, idx), ...state.books.slice(idx + 1)]
      };
    case actions.TOGGLE_MODAL:
      return { ...state, showModal: !state.showModal };
    default:
      return state;
  }
}

const store = createStore(
  reducesFun,
  initialState,
  applyMiddleware(createLogger())
);
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

const alldispaches = bindActionCreators(
  {
    addBook: actions.addBook,
    editBook: actions.editBook,
    deleteBook: actions.deleteBook
  },
  store.dispatch
);

// alldispaches.addBook({
//   title: 'Book2',
//   desc:
//     'In an unrestricted sense, a book is the compositional whole of which such sections, whether called books or chapters or parts, are parts. The intellectual content in a physical book need not be a composition, nor even be called a book. Books can consist only of drawings, engravings or photographs, crossword puzzles or cut-out dolls. In a physical book, the pages can be left blank or can feature an abstract set of lines to support entries, such as in an account book, an appointment book, an autograph book, a notebook, a diary or a sketchbook. Some physical books are made with pages thick and sturdy enough to support other physical objects, like a scrapbook or photograph album. Books may be distributed in electronic form as ebooks and other formats.',
//   author: 'Subhadra',
//   img: ''
// });

// alldispaches.editBook(0, {
//   title: 'My Biography',
//   desc: 'Its my first book',
//   author: 'Subhadra',
//   img: ''
// });

// alldispaches.deleteBook(0);

export default store;

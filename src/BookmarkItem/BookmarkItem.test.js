import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkItem from './BookmarkItem';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    id: '1',
    title: 'testing',
    url: 'testing',
    desciption: 'testing',
    rating: 4,
    onClickDelete: () => {},
  }
  ReactDOM.render(
    <BrowserRouter>
      <BookmarkItem {...props} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
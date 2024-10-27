import { Fragment } from 'react';
import Header from './component/Header';
import TodoList from './component/TodoList';

function App() {
  return (
    <Fragment>
      <Header />
      <TodoList />
    </Fragment>
  );
}

export default App;

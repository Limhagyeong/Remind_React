import { Fragment } from 'react';
import { useState } from 'react';
import Header from './component/Header';
import TodoList from './component/AddTodoList';
import Say from './study/say';
function App() {
  const [isIn, setIsIn] = useState('');
  return (
    <Fragment>
      <Say setIsIn={setIsIn} />
      {isIn === 'Y' && (
        <>
          <Header name="Todo-List" />
          <TodoList />
        </>
      )}
    </Fragment>
  );
}

export default App;

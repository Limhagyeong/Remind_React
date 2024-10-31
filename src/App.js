import { Fragment } from 'react';
import { useState } from 'react';
import Header from './component/Header';
import TodoList from './component/AddTodoList';
// import Control from './study/control';
import Control_reducer from './study/control_reducer';
function App() {
  const [isIn, setIsIn] = useState('');
  return (
    <Fragment>
      <Control_reducer setIsIn={setIsIn} />
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

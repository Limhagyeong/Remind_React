import { Fragment } from 'react';
import { useState } from 'react';
import Header from './component/Header';
import TodoList from './component/AddTodoList';
// import Control from './study/control/control';
import ControlReducer from './study/control/control_reducer';
function App() {
  const [isIn, setIsIn] = useState('');
  return (
    <Fragment>
      <ControlReducer setIsIn={setIsIn} />
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

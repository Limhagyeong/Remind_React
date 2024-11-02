import { Fragment } from 'react';
import { useState } from 'react';
import Header from './remind_1/components/Header';
import TodoList from './remind_1/components/AddTodoList';
// import Control from './study/control/control';
import ControlReducer from './remind_1/study/control/control_reducer';
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

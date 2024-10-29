import { useState } from 'react';
import ShowList from './ListControls/ShowList';

function AddTodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // 할일 추가
  const addTask = () => {
    if (task.trim() !== '') {
      const newTask = { id: tasks.length, task: task };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  return (
    <div className="TodoList">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTask();
        }}
      >
        <input
          className="Inputbar"
          type="text"
          name="InputTodo"
          placeholder="Add a task..."
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <input className="AddBtn" type="submit" value="ADD" />
      </form>
      <ShowList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default AddTodoList;

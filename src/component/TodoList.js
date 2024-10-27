import { useState } from 'react';

// Create, Update, Delete 연습
function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
      console.log(tasks);
    }
  };

  function ShowTodoList() {
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="TodoList">
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
      <input className="AddBtn" type="button" value="ADD" onClick={addTask} />
      <ShowTodoList />
    </div>
  );
}

export default TodoList;

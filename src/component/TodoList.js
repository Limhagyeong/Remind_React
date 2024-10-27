import { useState } from 'react';

// Create, Update, Delete 연습
function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask = { id: tasks.length, task: task };
      setTasks([...tasks, newTask]);
      setTask('');
      console.log([...tasks, newTask]);
    }
  };

  function ShowTodoList() {
    return (
      <ul>
        {tasks.map((eachTask) => (
          <>
            <li className="eachList" key={eachTask.id}>
              <input type="checkbox" class="item-checkbox" />
              {eachTask.task}
              <button>update</button>
              <button>Delete</button>
            </li>
          </>
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

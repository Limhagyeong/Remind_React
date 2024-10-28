import { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [updateMode, setUpdateMode] = useState('N');

  const addTask = () => {
    if (task.trim() !== '') {
      const newTask = { id: tasks.length, task: task };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  function ShowTodoList() {
    return (
      <ul>
        {tasks.map((eachTask) => (
          <>
            <li className="eachList" key={eachTask.id}>
              <input type="checkbox" className="item-checkbox" />
              {eachTask.task}
              {updateMode === 'N' && (
                <button
                  onClick={() => {
                    setSelectedId(eachTask.id);
                    setUpdateMode('Y');
                  }}
                >
                  update
                </button>
              )}

              <button>Delete</button>
            </li>
            {selectedId === eachTask.id && updateMode === 'Y' && (
              <Update id={selectedId} task={eachTask.task} />
            )}
          </>
        ))}
      </ul>
    );
  }

  function Update(props) {
    const [updateTask, setUpdateTask] = useState(props.task);
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const ChangeTask = [
            { id: props.selectedId, task: event.target.value },
          ];
          console.log('ch:'.ChangeTask);
          for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === ChangeTask.id) {
              tasks[i] = ChangeTask;
            }
          }
          // console.log(tasks);
          setUpdateMode('N');
        }}
      >
        <input
          type="text"
          // value={props.task} => 바로 받으면 조작할 수 없음
          value={updateTask}
          onChange={(event) => {
            setUpdateTask(event.target.value);
          }}
        ></input>
        <button type="submit">Save</button>
      </form>
    );
  }

  const saveUpdate = () => {};

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

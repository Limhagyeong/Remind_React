import { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [updateMode, setUpdateMode] = useState('N');
  const [deleteId, setDeleteId] = useState(null);

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
              <input
                type="checkbox"
                className="item-checkbox"
                onClick={() => {
                  setDeleteId(eachTask.id);
                }}
              />
              {eachTask.task}
              {updateMode === 'N' && (
                <button
                  onClick={() => {
                    console.log(deleteId);
                    setSelectedId(eachTask.id);
                    setUpdateMode('Y');
                  }}
                >
                  update
                </button>
              )}

              <button
                onClick={() => {
                  if (deleteId === null) {
                    alert('삭제할 일정을 선택하세요');
                  } else {
                    const newTasks = [];
                    for (let i = 0; i < tasks.length; i++) {
                      if (tasks[i].id !== deleteId) {
                        newTasks.push(tasks[i]);
                      }
                    }
                    setTasks(newTasks);
                    alert('삭제 완료');
                  }
                }}
              >
                Delete
              </button>
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
          const ChangeTask = { id: props.id, task: updateTask };
          const newTask = [...tasks]; // 복사해서 추가!
          // console.log('newTask', newTask);
          for (let i = 0; i < newTask.length; i++) {
            // console.log(newTask[i].id);
            // console.log(ChangeTask.id);
            if (newTask[i].id === ChangeTask.id) {
              newTask[i] = ChangeTask;
              break; // 불필요한 순회 X
            }
          }
          setTasks(newTask);
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
      <ShowTodoList />
    </div>
  );
}

export default TodoList;

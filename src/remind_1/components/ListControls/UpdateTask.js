import { useState } from 'react';

function UpdateTask(props) {
  const [updateTask, setUpdateTask] = useState(props.task);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const ChangeTask = { id: props.id, task: updateTask };
        const newTask = [...props.tasks]; // 복사해서 추가!
        // console.log('newTask', newTask);
        for (let i = 0; i < newTask.length; i++) {
          // console.log(newTask[i].id);
          // console.log(ChangeTask.id);
          if (newTask[i].id === ChangeTask.id) {
            newTask[i] = ChangeTask;
            break; // 불필요한 순회 X
          }
        }
        props.setTasks(newTask);
        props.setUpdateMode('N');
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

export default UpdateTask;

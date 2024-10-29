import { useState } from 'react';
import UpdateTask from './UpdateTask';

function ShowList(props) {
  const [selectedId, setSelectedId] = useState(null);
  const [updateMode, setUpdateMode] = useState('N');
  const [deleteId, setDeleteId] = useState(null);
  console.log(props);
  return (
    <ul>
      {props.tasks.map((eachTask) => (
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
                  for (let i = 0; i < props.tasks.length; i++) {
                    if (props.tasks[i].id !== deleteId) {
                      newTasks.push(props.tasks[i]);
                    }
                  }
                  props.setTasks(newTasks);
                  alert('삭제 완료');
                }
              }}
            >
              Delete
            </button>
          </li>
          {selectedId === eachTask.id && updateMode === 'Y' && (
            <UpdateTask
              id={selectedId}
              task={eachTask.task}
              tasks={props.tasks}
              setTasks={props.setTasks}
              setUpdateMode={setUpdateMode}
            />
          )}
        </>
      ))}
    </ul>
  );
}

export default ShowList;

// Create, Update, Delete 연습
function TodoList() {
  return (
    <div className="TodoList">
      <input
        className="Inputbar"
        type="text"
        name="InputTodo"
        placeholder="Add a task..."
      />
      <input className="AddBtn" type="button" value="ADD" />
    </div>
  );
}

export default TodoList;

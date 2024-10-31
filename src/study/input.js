import { useState } from 'react';
function Input() {
  const [state, setState] = useState({ username: '', msg: '' });

  // input값 여러개 제어할 때는 기존 입력값 복사 후 새로운 값 추가
  const handelChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = () => {
    // console.log('state', state);
    alert(state.username + ': ' + state.msg);
    setState({
      username: '',
      msg: '',
    });
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={state.username}
        onChange={handelChange}
      ></input>
      <input
        type="text"
        name="msg"
        value={state.msg}
        onChange={handelChange}
      ></input>
      <button onClick={handleClick}>확인</button>
    </div>
  );
}

export default Input;

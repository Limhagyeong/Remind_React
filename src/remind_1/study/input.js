import { useState } from 'react';
function Input() {
  const [state, setState] = useState({ username: '', msg: '' });
  const { username, msg } = state; // 구조 분해 할당 해두어야 간결하고 가독성 높게 사용할수있음

  // input값 여러개 제어할 때는 기존 입력값 복사 후 새로운 값 추가
  const onChange = (e) => {
    const nextState = (prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    });

    setState(nextState);
  };

  const onClick = () => {
    try {
      if (state.username === '') {
        throw new Error('사용자 이름을 입력하세요');
      }

      alert(username + ': ' + msg);

      setState({
        username: '',
        msg: '',
      });
    } catch (e) {
      alert(e.message);
    }
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="msg"
        value={msg}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      {/* onClick={onClick()} : X
          위와 같은 형태는 즉시 실행 함수
          onClick 이벤트는 클릭 시 실행시킬 콜백함수를 필요로함
          즉시 실행 함수가 들어가 있으면 클릭 이벤트와 관계없이 함수가 즉시 실행되기 때문에 본래의 의도대로 동작X
           */}
      <button onClick={onClick}>확인</button>
    </div>
  );
}

export default Input;

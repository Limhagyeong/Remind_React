import { useReducer } from 'react';

const initialState = { name: '', nickname: '' };

function UseReducer2() {
  function reducer(state, action) {
    // 실제 처리는 reducer로 분리
    return {
      ...state,
      [action.name]: action.value,
    };
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, nickname } = state;

  const onChanege = (e) => {
    dispatch(e.target); // dispatch는 값을 reducer로 전달만 하는 역할
    // console.log(e.target);
  };

  return (
    <>
      <div>
        <input
          name="name"
          type="text"
          placeholder="이름"
          value={name}
          onChange={onChanege}
        />
        <input
          name="nickname"
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={onChanege}
        />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
          <br />
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </>
  );
}

export default UseReducer2;

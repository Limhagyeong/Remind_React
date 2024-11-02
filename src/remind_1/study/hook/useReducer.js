import { useReducer } from 'react';
// useReducer 사용 시 직접적으로 상태를 관리해주지 않아도 된다
// reducer에 모아서 관리해주는 느낌 (useState와 비교했을 때)
// 흐름
// event  => action => dispatch => reducer => value
function UseReducer() {
  const reducer = (value, action) => {
    // action, type에 따라 다른 작업 수행
    switch (action.type) {
      case 'INCREMENT':
        return value + 1;
      case 'DECREMENT':
        return value - 1;
      default:
        return value;
    }
  };
  // useReducer를 통해 value와 dispatch를 가져옴
  // dispatch는 액션을 리듀서로 전달하는 함수
  // reducer가 새로운 상태를 반환하면 useReducer가 해당 값을 value에 저장
  const [value, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <p>현재 카운터 값은 {value}입니다.</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
}

export default UseReducer;

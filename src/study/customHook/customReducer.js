import { useReducer } from 'react';
// 해당 커스텀 훅을 useInputs에 사용
// 사용 전 useReducer_2랑 비교
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

// 훅은 반드시 use로 시작해야함
export default function useCustomReducer(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}

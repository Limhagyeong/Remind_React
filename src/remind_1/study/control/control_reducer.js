import { useReducer, useRef } from 'react';
import Input from '../input';
import Map from '../map';
import UseState from '../hook/useState';
import UseEffect from '../hook/useEffect';
import UseReducer from '../hook/useReducer';
import UseReducer2 from '../hook/useReducer_2';
import AvgUseState from '../avg/avg_useState';
import AvgUseMemo from '../avg/avg_useMemo';
import AvgUseCallback from '../avg/avg_useCallback';
import AvgUseRef from '../avg/avg_useRef';
import Scroll from '../scroll/scroll';
import UseInputs from '../customHook/useInputs';

// 함수 안에 선언하면 렌더링 될때마다 재정의됨 => 불필요
const initialState = { msg: '', mode: '' };

function Control(props) {
  const topRef = useRef(null);

  function reducer(state, action) {
    switch (action.type) {
      case 'ENTER':
        return { ...state, msg: '안녕하세요', mode: '' };
      case 'LEAVE':
        return { ...state, msg: '안녕히 가세요', mode: '' };
      case 'MOVE':
        return { ...state, msg: '', mode: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { msg, mode } = state;

  const onClickEnter = () => {
    props.setIsIn('Y');
    dispatch({ type: 'ENTER' });
  };

  const onClickLeave = () => {
    props.setIsIn('N');
    dispatch({ type: 'LEAVE' });
  };

  const toTheTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMove = (newMode) => {
    props.setIsIn('N');
    dispatch({ type: 'MOVE', payload: newMode });
  };

  return (
    <>
      <div ref={topRef}>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <button onClick={() => handleMove('input')}>Input</button>
        <button onClick={() => handleMove('map')}>Map</button>
        <button onClick={() => handleMove('usestate')}>useState</button>
        <button onClick={() => handleMove('useeffect')}>useEffect</button>
        <button onClick={() => handleMove('usereducer')}>useReducer</button>
        <button onClick={() => handleMove('usereducer2')}>useReducer2</button>
        <button onClick={() => handleMove('avgusestate')}>avgUseState</button>
        <button onClick={() => handleMove('avgusememo')}>avgUseMemo</button>
        <button onClick={() => handleMove('avgusecallback')}>
          avgUseCallback
        </button>
        <button onClick={() => handleMove('avguseref')}>avgUseRef</button>
        <button onClick={() => handleMove('scroll')}>scroll</button>
        <button onClick={() => handleMove('useinputs')}>useinputs</button>
        <h3>{msg}</h3>
        {mode === 'input' && <Input />}
        {mode === 'map' && <Map />}
        {mode === 'usestate' && <UseState />}
        {mode === 'useeffect' && <UseEffect />}
        {mode === 'usereducer' && <UseReducer />}
        {mode === 'usereducer2' && <UseReducer2 />}
        {mode === 'avgusestate' && <AvgUseState />}
        {mode === 'avgusememo' && <AvgUseMemo />}
        {mode === 'avgusecallback' && <AvgUseCallback />}
        {mode === 'avguseref' && <AvgUseRef />}
        {mode === 'scroll' && (
          <>
            <Scroll ref={topRef} />
            <button onClick={toTheTop}>상단으로 이동하기</button>
          </>
        )}
        {mode === 'useinputs' && <UseInputs />}
      </div>
    </>
  );
}

export default Control;

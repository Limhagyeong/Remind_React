import { useState } from 'react';
import Input from '../input';
import Map from '../map';
import UseState from '../hook/useState';
import UseEffect from '../hook/useEffect';
import UseReducer from '../hook/useReducer';

function Control(props) {
  const [msg, setMsg] = useState('');
  const [mode, setMode] = useState('');
  const onClickEnter = () => {
    props.setIsIn('Y');
    setMsg('안녕하세요');
    setMode('');
  };

  const onClickLeave = () => {
    props.setIsIn('N');
    setMsg('안녕히가세요');
    setMode('');
  };

  const MoveInput = () => {
    props.setIsIn('N');
    setMsg('');
    setMode('input');
  };

  const MoveMap = () => {
    props.setIsIn('N');
    setMode('map');
    setMsg('');
  };

  const MoveUseState = () => {
    props.setIsIn('N');
    setMode('usestate');
    setMsg('');
  };

  const MoveUseEffect = () => {
    props.setIsIn('N');
    setMode('useeffect');
    setMsg('');
  };

  const MoveUseReducer = () => {
    props.setIsIn('N');
    setMode('usereducer');
    setMsg('');
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button onClick={MoveInput}>Input</button>
      <button onClick={MoveMap}>Map</button>
      <button onClick={MoveUseState}>useState</button>
      <button onClick={MoveUseEffect}>useEffect</button>
      <button onClick={MoveUseReducer}>useReducer</button>

      <h3>{msg}</h3>
      {mode === 'input' && <Input />}
      {mode === 'map' && <Map />}
      {mode === 'usestate' && <UseState />}
      {mode === 'useeffect' && <UseEffect />}
      {mode === 'usereducer' && <UseReducer />}
    </div>
  );
}

export default Control;

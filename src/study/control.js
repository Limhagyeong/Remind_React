import { useState } from 'react';
import Input from './input';
import Map from './map';

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

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button onClick={MoveInput}>Input</button>
      <button onClick={MoveMap}>Map</button>
      <h3>{msg}</h3>
      {mode === 'input' && <Input />}
      {mode === 'map' && <Map />}
    </div>
  );
}

export default Control;

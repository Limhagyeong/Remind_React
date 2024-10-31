import { useState } from 'react';
import Input from './input';

function Say(props) {
  const [msg, setMsg] = useState('');
  const [inputMode, setInputMode] = useState('N');
  const onClickEnter = () => {
    props.setIsIn('Y');
    setMsg('안녕하세요');
    setInputMode('N');
  };

  const onClickLeave = () => {
    props.setIsIn('N');
    setMsg('안녕히가세요');
    setInputMode('N');
  };

  const MoveInput = () => {
    props.setIsIn('N');
    setMsg('');
    setInputMode('Y');
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button onClick={MoveInput}>입력</button>
      <h3>{msg}</h3>
      {inputMode === 'Y' && <Input />}
    </div>
  );
}

export default Say;

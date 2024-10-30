import { useState } from 'react';

function Say(props) {
  const [msg, setMsg] = useState('');
  const onClickEnter = () => {
    props.setIsIn('Y');
    setMsg('안녕하세요');
  };

  const onClickLeave = () => {
    props.setIsIn('N');
    setMsg('안녕히가세요');
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h3>{msg}</h3>
    </div>
  );
}

export default Say;

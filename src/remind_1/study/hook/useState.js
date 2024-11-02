import { useState } from 'react';

function UseState() {
  const [value, setValue] = useState(0);
  const [info, setInfo] = useState({ name: '', nickname: '' });
  const { name, nickname } = info;

  const onChange = (e) => {
    const inputInfo = (info) => ({
      ...info,
      [e.target.name]: e.target.value,
    });
    setInfo(inputInfo);
  };

  return (
    <>
      <div>
        <p>현재 카운터값은 {value}입니다.</p>
        <button
          onClick={() => {
            setValue(value + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setValue(value - 1);
          }}
        >
          -1
        </button>
      </div>
      <hr></hr>
      <div>
        <input
          name="name"
          value={name}
          placeholder="이름을 입력하세요"
          onChange={onChange}
        ></input>
        <input
          name="nickname"
          value={nickname}
          placeholder="닉네임을 입력하세요"
          onChange={onChange}
        ></input>
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

export default UseState;

import customReducer from './customReducer';

function UseInputs() {
  const [state, onChange] = customReducer({
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;

  return (
    <>
      <div>
        <input
          name="name"
          type="text"
          placeholder="이름"
          value={name}
          onChange={onChange}
        />
        <input
          name="nickname"
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={onChange}
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

export default UseInputs;

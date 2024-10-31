import { useEffect, useState } from 'react';

function UseEffect() {
  const [info, setInfo] = useState({ name: '', nickname: '' });
  const { name, nickname } = info;

  // 마운트 직후 혹은 의도에 따라 업데이트 시 수행
  // 두 번째 인자로 배열을 전달하여 특정 값이 변할 때 실행되도록 설정
  // useEffect(() => {
  //   console.log('렌더링 완료');
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // }, [name]);

  // return() => 언마운트(돔에서 제거) 혹은 업데이트 직전 수행
  // cleanup을 통해 이전 상태 정리하고 변경 전후 상태 확인
  // cleanup 함수는 WebSocket 연결을 제대로 해제하는 데 중요한 역할을 수행함을 참고
  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, [name]);

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

export default UseEffect;

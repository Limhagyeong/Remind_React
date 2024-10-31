import { useState } from 'react';

function Map() {
  // index를 key값으로 활용하는 건 리렌더링에 비효율적일 수 있음(고유 id값을 지정해주는게 좋다)
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, SetInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const NameList = () => {
    return names.map((name) => (
      <div>
        <li key={name.id}>
          {name.text}
          <button
            onClick={() => {
              onDelete(name.id);
            }}
          >
            삭제
          </button>
        </li>
      </div>
    ));
  };

  const onChange = (e) => {
    SetInputText(e.target.value);
  };

  const onClick = () => {
    if (inputText !== '') {
      const addList = [
        ...names,
        {
          id: nextId,
          text: inputText,
        },
      ];
      setNames(addList);
      setNextId(nextId + 1);
      SetInputText('');
    } else {
      alert('텍스트를 입력하세요');
    }
  };

  const onDelete = (id) => {
    const newList = names.filter((name) => name.id !== id);
    setNames(newList);
  };

  return (
    <>
      <ul>
        <NameList />
      </ul>
      <input text="text" value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>입력</button>
    </>
  );
}

export default Map;

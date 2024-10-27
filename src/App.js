import './App.css';
import { useState } from 'react';
function Article(props) {
  // console.log(props);
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function Header(props) {
  // console.log(props.title);
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            // => event객체는 이벤트에 대한 여러 정보를 담고있음 (어떤 요소가 클릭되었는지,클릭한 위치의 좌표,키보드 상태(Shift, Ctrl, Alt) 등..)
            event.preventDefault(); // => 기본동작 방지 (링크 클릭 시 리로드되지않음)
            props.onChange();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Nav(props) {
  // console.log(props);
  // const lis = [];
  // for (let i = 0; i < props.topics.length; i++) {
  //   let t = props.topics[i];
  //   lis.push(
  //     <li key={t.id}>
  //       <a href={'/read/' + t.id} >{t.title}</a>
  //     </li>
  //   );
  // }
  const lis = props.topics.map((t) => {
    return (
      <li key={t.id}>
        <a
          // id={t.id}
          href={'/read/' + t.id}
          onClick={(event) => {
            event.preventDefault();
            // props.onShow(event.target.id);
            props.onShow(t.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  });
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  );
}
function Update(props) {
  // props는 외부에서 내부로 전달받은 값 => 내부에서 조작이 불가함
  // state 형태로 바꿔서 내부에서 조작이 가능하도록 해야함
  // 초기값은 외부에서 받은 값으로 설정해두고 이후 state를 통해 사용자가 입력한 값으로 업데이트 시킴 (onChange + state 활용)
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(event) => {
              // 리액트에서 onChange는 값 변경 자체가 트리거
              setTitle(event.target.title.value);
            }}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={body}
            onChange={(event) => {
              setBody(event.target.body);
            }}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="Update"></input>
        </p>
      </form>
    </article>
  );
}
function App() {
  // const _mode = useState('WELCOME');
  // console.log(_mode);
  // const mode = _mode[0];
  // const setMode = _mode[1];

  const [mode, setMode] = useState('WELCOME'); // mode라는 상태변수를 WELCOME으로 초기화하고 setMode함수를 통해 mode값을 변경 + 변화를 감지해서 리렌더링
  const [selectedId, setSelectedId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ]);

  let content = null;
  let contextControl = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === 'READ') {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === selectedId) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
    contextControl = (
      <li>
        <a
          href={'/update/' + selectedId}
          onClick={(event) => {
            event.preventDefault();
            setMode('UPDATE');
          }}
        >
          Update
        </a>
      </li>
    );
  } else if (mode === 'CREATE') {
    content = (
      <Create
        onCreate={(InputTitle, InputBody) => {
          const newTopic = { id: nextId, title: InputTitle, body: InputBody };
          /*
          topics.push(newTopic);
          setTopics(topics); // => 참조값은 그대로이기 때문에 리액트가 상태 변화 감지 못함 (리렌더링X)
          */
          setTopics((topics) => [...topics, newTopic]); // 깊은 복사 후 배열형태로 추가 (참조값 변경 O)

          setMode('READ'); // 추가 후 content 변경
          setSelectedId(nextId); // 추가 된 내용 보여주기
          setNextId(nextId + 1); // 아이디값 1 증가
        }}
      ></Create>
    ); // Create 컴포넌트를 띄움
  } else if (mode === 'UPDATE') {
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === selectedId) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(updateTitle, updateBody) => {
          const newTopics = [...topics]; // 기존 토픽 배열 깊은 복사
          const updatedTopic = {
            id: selectedId,
            title: updateTitle,
            body: updateBody,
          }; // 사용자가 입력한 정보
          for (let i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === selectedId) {
              newTopics[i] = updatedTopic; // 업데이트
              break; // 더 돌릴 필요없음
            }
          }
          setTopics(newTopics);
          setMode('READ');
        }}
      ></Update>
    );
  }
  return (
    <div>
      <Header
        title="WEB"
        onChange={() => {
          setMode('WELCOME');
        }}
      ></Header>
      <Nav
        topics={topics}
        onShow={(selectedId) => {
          setMode('READ');
          setSelectedId(selectedId);
        }}
      ></Nav>
      {content}
      <ul>
        <li>
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode('CREATE');
            }}
          >
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}
export default App;

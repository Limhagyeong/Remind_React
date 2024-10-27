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
          console.log(topics);
        }}
      ></Nav>
      {content}
      <a
        href="/create"
        onClick={(event) => {
          event.preventDefault();
          setMode('CREATE');
        }}
      >
        Create
      </a>
    </div>
  );
}

export default App;

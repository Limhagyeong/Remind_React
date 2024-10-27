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
function App() {
  // const _mode = useState('WELCOME');
  // console.log(_mode);
  // const mode = _mode[0];
  // const setMode = _mode[1];

  const [mode, setMode] = useState('WELCOME'); // mode라는 상태변수를 WELCOME으로 초기화하고 setMode함수를 통해 mode값을 변경 + 변화를 감지해서 리렌더링
  const [selectedId, setId] = useState(null);
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];
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
          setId(selectedId);
        }}
      ></Nav>
      {content}
    </div>
  );
}

export default App;

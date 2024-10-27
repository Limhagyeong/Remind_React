import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Inputbar from './component/Inputbar';
import List from './component/List';

function App() {
  return (
    <Fragment>
      <Header />
      <Inputbar />
      <Router>
        <Routes>
          <Route path={'/'} element={<List />}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

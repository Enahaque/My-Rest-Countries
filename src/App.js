import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import Volunteers from './components/Volunteers/Volunteers';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>You can do. I believe on you</h1>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/volunteers" element={<Volunteers></Volunteers>}></Route>
      </Routes>
    </div>
  );
}

export default App;


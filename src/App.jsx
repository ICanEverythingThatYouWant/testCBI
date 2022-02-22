import './App.css';
import Header from './components/Header';
import Main from "./components/Main/Main";
import {useState} from "react";
function App() {
    const [queryMovie, setQueryMovie] = useState('');

  return (
    <div className="App">
        <Header QueryChange={setQueryMovie}/>
        <Main queryMovie={queryMovie}/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {Greet, SendOff} from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Name from './components/Name';

function App() {
  return (
    <div className="App">
    <Greet name="Dheeraj"/>
    <Greet name="James"/>
    <Greet name="John"/>
    <Welcome />
    <Message />
    <Name />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SendOff />
    </div>
  );
}

export default App;

import './App.css';
import Home from './components/Home';

function llamarHome(){
  <Home/>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LOLO</h1>
        <Home/>
        <hr/>
        <ol>
          <li>SQL SERVER</li>
          <li>POSTGRESQL</li>
          <li>MONGODB</li>
        </ol>
      </header>
    </div>
  );
}

export default App;

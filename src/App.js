import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header/index'
import FooterComponent from './components/Footer/footerComponent';
import EmptyPage from './pages/EmptyPage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <EmptyPage/>
      <FooterComponent/>
    </div>
  );
}

export default App;

import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppErrorBoundary from './pages/AppErrorBoundary';
import AppPage from './pages/AppPage';

function App() {
  return (
    <AppErrorBoundary>
      <div className="App">
          <AppPage />
      </div>
    </AppErrorBoundary>
  );
}

export default App;

import './App.css';
import "antd/dist/antd.css";

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

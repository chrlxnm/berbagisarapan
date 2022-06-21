import './App.css';

import AppErrorBoundary from './pages/AppErrorBoundary';
import EmptyPage from './pages/EmptyPage';
import FooterComponent from './components/Footer/footerComponent';
import Header from '../src/components/Header/index'

function App() {
  return (
    <AppErrorBoundary>
      <div className="App">
        <Header/>
        <EmptyPage/>
        <FooterComponent/>
      </div>
    </AppErrorBoundary>
  );
}

export default App;

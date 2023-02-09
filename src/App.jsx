import logo from './logo.svg';
import './App.css';
import Navigation from './components/NavigationBar'
import MainScreen from './components/MainScreen'

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainScreen />
    </div>
  );
}

export default App;

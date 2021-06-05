import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar/SideBar/SideBar';
import Overview from './Components/Overview/Overview/Overview';
import OptionBar from './Components/OptionsBar/OptionBar/OptionBar';
function App() {
  return (
    <div className="App">
      <SideBar />
      <Overview />
      <OptionBar />
    </div>
  );
}

export default App;

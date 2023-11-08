import './App.css';
import NavBar from './components/NavBar';
import TabBar from './components/TabBar';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <TabBar />
      <Projects></Projects>

    </div>
  );
}

export default App;
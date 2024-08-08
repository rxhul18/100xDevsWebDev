import './App.scss';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Version from './components/Version.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Version />
      <Home />
    </div>
  )
}

export default App
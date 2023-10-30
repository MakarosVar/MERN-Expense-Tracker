import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;

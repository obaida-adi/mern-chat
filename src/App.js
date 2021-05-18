import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Room from './components/Room';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Home } />
      <Route path="/room/:id" component={ Room } />
    </Router>
  );
}

export default App;

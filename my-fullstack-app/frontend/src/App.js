import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Employees from './components/Employees';
import Department from './components/Department';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/employees" style={{ marginRight: '1rem' }}>All Employees</Link>
        <Link to="/department">Departments</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/department" element={<Department />} />
      </Routes>
    </Router>
  );
}

export default App;
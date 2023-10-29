import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Test_page } from './pages/test_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/one' element={<h1>Page 1</h1>} />
        <Route path='/two' element={<h1>Page 2</h1>} />
        <Route path='/three' element={<Test_page />} />
      </Routes>
    </Router>
  );
}

export default App;

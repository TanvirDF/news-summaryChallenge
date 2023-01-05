import './App.css';
import AllNews from './Components/AllNews';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NewsSummary from './Components/NewsSummary'

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<AllNews />} />
        <Route path='/summary/:id' element={<NewsSummary />} />
      </Routes>

    </Router>

  );
}

export default App;

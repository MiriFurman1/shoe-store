
import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import AddShoe from './pages/AddShoe'
import ShoesPage from './pages/ShoesPage'
import ShoePage from './pages/ShoePage'
import HomePage from './pages/HomePage';

function E404() {
  return <h1>404</h1>;
}

function App() {





  return (
    <div className="App">

      <nav>
      <Link to='/'>Home</Link>
      <Link to='shoespage/'>All shoes</Link>
      <Link to='addshoe'>Add new shoe</Link>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/shoespage' element={<ShoesPage />} />
        <Route path='/addshoe' element={<AddShoe />} />
        <Route path='/shoespage/:shoeid' element={<ShoePage />} />
        <Route path='*' element={<E404 />} />
      </Routes>
    </div>
  );
}

export default App;

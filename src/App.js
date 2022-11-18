import { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios'
import { Routes, Route, Link, useParams } from 'react-router-dom';
import AddShoe from './pages/AddShoe'
import ShoesPage from './pages/ShoesPage'
import ShoePage from './pages/ShoePage'
import HomePage from './pages/HomePage';

function E404() {
  return <h1>404</h1>;
}

function App() {
  const [errorMessage,setErrorMessage]=useState("")
  const [shoesList,setShoesList]=useState("")


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
      
  //       const { data } = await axios.get('https://637389a9348e9472990f6169.mockapi.io/shoes');
  //       setShoesList(data);

  //     } catch (e) {
  //       setErrorMessage(e.message);
  //       setTimeout(() => {
  //         setErrorMessage(null);
  //       }, 1500);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      {/* {errorMessage?<h4>{errorMessage}</h4>:""} */}
      <nav>
      <Link to='/'>Home</Link>
      <Link to='shoespage/'>All shoes</Link>
      <Link to='addshoe'>Add new shoe</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/shoespage' element={<ShoesPage />} />
        <Route path='/addshoe' element={<AddShoe />} />
        <Route path='/animal/:shoeid' element={<ShoePage />} />
        <Route path='*' element={<E404 />} />
      </Routes>
    </div>
  );
}

export default App;

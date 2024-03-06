import './App.css'
// eslint-disable-next-line no-unused-vars
import { Outlet, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import HomePage from './pages/HomePage';
import NavMain from './components/NavBar';




function App() {
  console.log('<App/>');
  return (
    <>
      <NavMain/>
      
      <div>
        



      </div>
      <Outlet/>
      {/* <HomePage/> */}
      
    </>
  )
}

export default App
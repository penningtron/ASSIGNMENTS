import { useState } from 'react'
import MySpinner from './components/Spinner';

import './App.css'
import NavBar from './components/Navbar';

function App() {
  //      get     set       init(false)
  const [show, setShow] = useState(false);
  

  return (
    <>
    <NavBar/>
    <MySpinner/>
      {/* <p className='text-purple-500 bg-slate-300'>Hello World</p>
      <div className='m-5 mt-10 border-2'>
        Im a box

      </div> */}

      {/* <div className='w-full h-full flex flex-row justify-center items-center'>
        <p>hello</p>
        <p>again</p>


      </div> */}
      <p className={show ? "bg-green-200" : "bg-red-200"}> some stuff here </p>
      <button className='px-2 py-1 border-2 text-blue-500 bg-slate-400 hover:bg-blue-100'
        onClick={()=> setShow(!show)}
      > click me 
      </button>
    </>
  )
}

export default App

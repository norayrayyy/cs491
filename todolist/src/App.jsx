import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TodoWrapper } from './components/TodoWrapper'
import Counter2 from './components/Counter2'
import Counter3 from './components/Counter3'


// m = margin, p = padding, py = padd y-axis, 
function App() {
  return (
    <div className = "bg-black text-white py-5">
      <div className="container-md">

      <div className="card bg-dark text-white mb-4 p-4">
        <TodoWrapper />
      </div>

        <div className="row">
          <div className="col-6 mb-3">
          <div className="card bg-dark text-white text-center p-3">
            <Counter2 />
          </div>
        </div>

          <div className="col-6 mb-3">
            <div className="card bg-dark text-white text-center p-3">
              <Counter3 />  
            </div>
        </div>
      </div>
    </div>
  </div>
)}

export default App;
    
    /* // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </> */


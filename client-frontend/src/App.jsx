import { useState } from 'react'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>

      {/* Main content of your app */}
      <div className="container mx-auto p-4 text-3xl font-semi-bold bg-white">
        <h2>Call Now!</h2>
        <h2>Any Job, We will fix it.</h2>
        <h2>1-800-000-000</h2>
      </div>
  
    </>
  )
}


export default App

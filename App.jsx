import { useState } from 'react';
import './App.css';
import GetQuote from './getQuote';


function App() {
  const [saved,setSaved]= useState([])

  const handleSave = (newquote) =>{
    setSaved([...saved,newquote])
    console.log(saved)
  }

  return (
    <div>
      <h1 style={{ textTransform: 'uppercase', fontSize: '50px' }}> Random movie quote of the day</h1>
    
      <GetQuote onSubmit={handleSave}/>
    </div>
  )
}
export default App
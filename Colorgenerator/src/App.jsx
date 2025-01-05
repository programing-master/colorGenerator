import { useState } from 'react'
import Values from 'values.js'
import FormColor from './components/FormColor/FormColor'
import './App.css'
import DisplayColors from './components/DisplayColors/DisplayColors'

function App () {
  const [list, setList] = useState(new Values('red').all())

  console.log(list)
  return (
    <>
      <div className='main-content'>
        <FormColor setList={setList} />
        <DisplayColors list={list}/>
      </div>
    </>
  )
}

export default App

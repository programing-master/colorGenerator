import React, { useEffect, useState } from 'react'
import Values from 'values.js'
import './styles.css'

export default function FormColor ({ setList }) {
  const [color, setColor] = useState('rgb(0,0,0)')
  const [err, setErr] = useState(false)

  const handleGenerator = e => {
    e.preventDefault()
    try {
      let colors = new Values(color).all()
      setList(colors)
    } catch (error) {
      console.log(error)
      setErr(true)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setErr(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [err])

  return (
    <form className='form-styles' onSubmit={handleGenerator}>
      <h1>Pick your color</h1>
      <label className='label-styles'>
        <span>Inscribe a color</span>
        <input type='color' onChange={e => setColor(e.target.value)} />
      </label>

      <button className='generate-button'>Generate</button>
      <p className='err'>
        {err ? <p className='err'>No existe este color</p> : null}
      </p>
    </form>
  )
}

import React from 'react'
import ColorCard from '../ColorCard/ColorCard'
import "./styles.css"
export default function DisplayColors ({ list }) {
  return (
    <div className='colors-box'>
      {list.map((item, index) => (
               <ColorCard key={index} hex={item.hex} />
      ))}
    </div>
  )
}

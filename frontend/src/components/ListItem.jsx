import React from 'react'
import TickIcon from './TickIcon'
import Progressbar from './Progressbar'

const ListItem = ({ task }) => {
  return (
    <div className='list-item'>
      
      <div className='info-container'>
        <TickIcon />
        <h5 style={{color: 'black'}}>{task.title}</h5>
        <Progressbar />
      </div>
      <div className='button-container'>
        <button className='edit' style={{color: 'black'}}>edit</button>
        <button className='delete' style={{color: 'black'}}>delete</button>
      </div>
    </div>
  )
}

export default ListItem
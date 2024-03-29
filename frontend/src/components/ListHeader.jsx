import React from 'react'

const ListHeader = ({ listName }) => {

    const signOut = () =>{
      console.log('Signout')  
    }

  return (
    <div className='list-header'>
      <h1 style={{color: 'black'}}>{listName}</h1>
      <div className='button-container'>
        <button className='create-new' style={{color: 'black'}}>Add</button>
        <button className='signout' style={{color: 'black'}} onClick={signOut}>Signout</button>
      </div>
    </div>
  )
}

export default ListHeader
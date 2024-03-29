import { useEffect, useState } from 'react'
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'

const App = () => {

  const userEmail = 'ady@test2.com'
  const [tasks, setTasks] = useState(null)

  const getData = async() =>{
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json()  
      console.log(json)
      setTasks(json)
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => getData, [])
  // console.log(tasks);
  // const sortedTask = tasks && tasks > 0 ? tasks.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className='app'>
      <ListHeader listName = {'Daily Tasks List'}/>
      {tasks && tasks.length > 0 ? tasks.map((task) => <ListItem key={task.id} task={task}/>): 
      <h6 style={{color: 'black'}}>No tasks to display</h6>}
    </div>
  )
}

export default App

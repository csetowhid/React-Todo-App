import React from 'react'
import { Todos } from './Todos'

const Home = () => {
    const dummyTodos = [
        {
            id : 1,
            title : 'Title 1',
            description : 'Description 1'
        },
        {
            id : 2,
            title : 'Title 2',
            description : 'Description 2'
        }
    ]
  return (
    <div>
        <h1>Todo App</h1>
        <Todos todos={dummyTodos} />
    </div>
  )
}

export default Home
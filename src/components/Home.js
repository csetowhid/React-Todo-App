import React from 'react'
import { Todos } from './Todos'
import style from './home.module.css'
import { Form } from './Form'

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
    <div className={style.container}>
        <h1 style={{ color:"white" }}>Todo App</h1>
        <Form />
        <Todos todos={dummyTodos} />
    </div>
  )
}

export default Home
import React, { useState } from 'react'
import { Todos } from './Todos'
import style from './home.module.css'
import { Form } from './Form'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((prevTodos) =>{
            return [...prevTodos, {id: uuidv4(), todo}]
        })
    }
  return (
    <div className={style.container}>
        <h1 style={{ color:"white" }}>Todo App</h1>
        <Form onAddTodo={handleAddTodo} />
        <Todos todos={todos} />
    </div>
  )
}

export default Home
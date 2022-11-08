import React from 'react'
import { Todo } from './Todo';
import style from './todos.module.css'

export const Todos = (props) => {
    console.log(props.todos);
  return (
    <section className={style.todos}>
      {props.todos.map((todo) => 
      <Todo todo={todo} key={todo.id} />
      )}
    </section>
  )
}

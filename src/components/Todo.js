import React from 'react'
import style from './todo.module.css'

export const Todo = (props) => {
    const {title,description, id} = props.todo
  return (
    <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <button className={style.btn}>
            <i className="fa fa-trash fa-2x"></i>
        </button>
    </article>
  )
}

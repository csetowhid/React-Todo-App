import React from 'react'
import style from './todo.module.css'

export const Todo = (props) => {
    const {title,description, id} = props.todo;
    const handleClick = (id) => {
      alert(id);
    }
  return (
    <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <button className={style.btn} onClick={()=>{
          handleClick(id)}}>
            <i className="fa fa-trash fa-2x"></i>
        </button>
    </article>
  )
}

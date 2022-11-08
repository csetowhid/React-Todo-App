import React, { useState } from 'react'
import style from './form.module.css'
export const Form = () => {

    const [todo, setTodo] = useState({
        title : "",
        description: ""
    });
    const {title, description} = todo;

    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style['form-field']}>
            <label htmlFor='title' >Title: </label>
            <input type='text' id="title" name="title" value={title} />
        </div>
        <div className={style['form-field']}>
            <label htmlFor='title'>Description: </label>
            <textarea id="textarea" name="textarea" value={description}></textarea>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

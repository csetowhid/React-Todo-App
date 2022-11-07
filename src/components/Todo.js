import React from 'react'

export const Todo = (props) => {
    const {title,description, id} = props.todo
  return (
    <article>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <button>
            <button>
                <i className="fa fa-trash fa-2x"></i>
            </button>
        </button>
    </article>
  )
}

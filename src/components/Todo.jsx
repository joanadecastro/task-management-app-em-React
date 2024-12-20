import React from 'react'



const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div  className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
    <div className="content">
      <p>{todo.text}</p>
      <p className="category">{todo.category}</p>
    </div>
    <div>
      <button className={`complete ${todo.isCompleted ? 'unmark' : 'mark'}`} onClick={() => completeTodo(todo.id) } >{todo.isCompleted ? "Desmarcar" : "Completar"}</button>
      <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  </div>

  )
 
}

export default Todo

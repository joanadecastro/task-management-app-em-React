import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");


    const handleChangeValue = (e) => {
        setValue(e.target.value);
    }

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
   if(value && category) {
    addTodo(value, category);
    setValue("");
    setCategory("");
   
   } 
           
   
    }



    return (
        <div className="todo-form">
            <h2>Criar tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Digite o titulo' value={value} onChange={handleChangeValue} />
                <select value={category} onChange={handleChangeCategory}>
                    <option value="">Seleciona a categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='submit' >Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm

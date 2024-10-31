import React from 'react'
import { useState } from 'react'

const TodoForm = () => {

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value, category)
    }

    const handleChangeValue = (e) => {
        setValue(e.target.value)
    }

    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
    }

    return (
        <div className="todo-form">
            <h2>Criar tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Digite o titulo' onChange={handleChangeValue}/>
                <select onChange={handleChangeCategory}>
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

import React from 'react'

const Filter = ({filterCategory, setFilterCategory}) => {
  return (
    <div>
      <h2>Filtrar por categoria:</h2>
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
        <option value="">Todas</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
        <option value="Estudos">Estudos</option>
      </select>
    </div>
  )
}

export default Filter

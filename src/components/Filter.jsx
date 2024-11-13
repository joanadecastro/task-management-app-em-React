import React from 'react'

const Filter = ({status, setStatus}) => {
  return (
    <div className='filter'>
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={status}  onChange={(e) => setStatus(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplet">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button>Asc</button>
          <button>Desc</button>
        </div>
      </div>

    </div>
  )
}

export default Filter

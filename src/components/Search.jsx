import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
      <h2>Pesquisar:</h2>
      <input
        type="text"
        placeholder='Pesquisar tarefas...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>

  )
}

export default Search

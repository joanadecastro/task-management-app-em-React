import { useState } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'
import './App.css'



function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para o ginasio",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [status, setStatus] = useState('All')
  const [sortOrder, setSortOrder] = useState('')

  const addTodo = (text, category) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      category,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const completeTodo = (id) => {
    console.log("completeTodo foi chamado com id:", id);

    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    )

  }

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase()) &&

    (status === 'All' ||
      (status === 'Completed' && todo.isCompleted) ||
      (status === 'Incomplet' && !todo.isCompleted))
  )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.text.localeCompare(b.text);
      } else if (sortOrder === 'desc') {
        return b.text.localeCompare(a.text);
      }
      return 0;

    })




  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm} />
      </div>
      <div className="todo-list">
        <Filter
          status={status}
          setStatus={setStatus}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder} />
      </div>
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App

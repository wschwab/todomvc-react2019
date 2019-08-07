import React from "react"

class TodoHeader extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: [],
      todoCounter: 0
    }
  }

  handleChange(id){
    if (id > this.state.todoCounter) {
      const newTodo = {id: this.state.todoCounter + 1,
                     content,
                     selected: false,
                     completed: false
                     }
      this.setState(prevState => {
        const updatedTodos = prevState.state.todos
        updatedTodos.append(newTodo)
      })
      return {
        todos: updatedTodos
      }
    }
  }

  createNewTodo(content){
    handleChange(this.state.todoCounter + 1)
  }

  render() {
    return (
      <div>
          <header className="header">
              <h1>todos</h1>
              <input className="new-todo" placeholder="What needs to be done?" autofocus>
          </header>
      </div>
    )
  }
}

export default TodoHeader

import React from "react"

class TodoMain extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox">
          <label for="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            { props }
          </ul>
      </section>
    )
  }
}

export default TodoMain

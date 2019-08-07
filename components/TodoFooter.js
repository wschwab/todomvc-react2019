import React from "react"

class TodoFooter extends React.Component {
  constructor() {
    super()

    this.state = {
      completed: 0
    }
  }

  render() {
    return (
      <footer className="footer">
  				<span className="todo-count"><strong>0</strong> item left</span>
    				<ul className="filters">
      					<li>
        						<a className="selected" href="#/">All</a>
      					</li>
      					<li>
        						<a href="#/active">Active</a>
      					</li>
      					<li>
        						<a href="#/completed">Completed</a>
      					</li>
      				</ul>
    				{this.state.completed.length && <button className="clear-completed">Clear completed</button>}
			</footer>
    )
  }
}

export default TodoFooter

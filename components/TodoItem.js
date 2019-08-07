import React from "react"

const TodoItem = (props) => (
  <div className="view">
      <li>
          <input className="toggle" type="checkbox" id="">
          <label>{props}</label>
          <button class="destroy" id=""></button>
      </li>
  </div>
)

export default TodoItem

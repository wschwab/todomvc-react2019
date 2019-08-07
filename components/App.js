// Notes to self:
// 	Need to:
// 		figure out how to change state in component A while in component B:
// 			selected
// 			deleted
// 		figure out how make a new B while in A:
// 			new todos
// 		how to figure out what's completed in Footer
// 		should we just use context for this?
// 	Check:
// 		conditional rendering:
// 			App
// 			Footer

import React from "react"
import TodoHeader from "./TodoHeader"
import TodoMain from "./TodoMain"
import TodoFooter from "./TodoFooter"
import TodoInfo from "./TodoInfo"
// other imports - components, data

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			todos: []
		}
	}

	render() {

		return (
			<div>
					<section className="todoapp">
						<TodoHeader />
						{this.state.todos.length && <TodoMain />}
						{this.state.todos.length && <TodoFooter />}
					</section>
						<TodoInfo />
			</div>
		)
	}
}

export default App

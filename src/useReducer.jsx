import React, { useReducer } from 'react'
import { COMPLETE, initialState, reducer, UNCOMPLETE } from './reducer'

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<div>
			<h3>JS Version</h3>
			{state.map(todo => (
				<button
					key={todo.name}
					style={{ display: 'flex', alignItems: 'center' }}
					onClick={() =>
						dispatch({
							type: todo.isCompleted ? UNCOMPLETE : COMPLETE,
							payload: todo.name,
						})
					}
				>
					<div
						style={{
							backgroundColor: todo.isCompleted ? 'green' : 'gray',
							width: 15,
							height: 15,
							marginRight: 5,
						}}
					/>
					<div>{todo.name}</div>
				</button>
			))}
		</div>
	)
}

export default App

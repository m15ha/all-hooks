import React, { FC } from 'react'
import { useAuth } from './AuthContext'
import { useLocalStorage } from './hooks/local-storage/useLocalStorage'
import { initialState } from './reducer'

const AppTs: FC = () => {
	const { isAuth } = useAuth()
	const [todos, setTodos] = useLocalStorage('todos', initialState)

	// console.log(todos)

	return (
		<div style={{ marginTop: 100 }}>
			TypeScript Version {isAuth && 'Auth'}
			<button
				onClick={() =>
					setTodos(
						todos.map((t: any, i: number) => {
							if (i === 1) t.isCompleted = true

							return t
						})
					)
				}
			>
				Change second todo
			</button>
		</div>
	)
}

export default AppTs

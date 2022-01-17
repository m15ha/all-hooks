import { useDebugValue, useState } from 'react'

export const useName = () => {
	const [name, setName] = useState('')

	useDebugValue(name ? 'With name' : 'No name')

	return { name, setName }
}

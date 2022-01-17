import React from 'react'
import { useInput } from './useInput'

const UseInputEx = () => {
	const { bind, val } = useInput('')

	// console.log(val)

	return <input {...bind} placeholder='Enter city' />
}

export default UseInputEx

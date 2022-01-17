import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AppTs from './AppTs'
import { AuthProvider } from './AuthContext'
import UseInputEx from './hooks/useInput/use-input-ex'
import UseFetchEx from './hooks/useFetch/UseFetchEx'
import UseCookieEx from './hooks/useCookie/UseCookieEx'

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<App />
			<UseInputEx />
			<UseFetchEx />
			<UseCookieEx />
			<AppTs />
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

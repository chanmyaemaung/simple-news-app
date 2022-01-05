import { useState, useContext, useEffect, createContext } from 'react'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from 'libs/firebase'
import { useRouter } from 'next/router'

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(null)
	const [currentUser, setCurrentUser] = useState()

	const { push } = useRouter()

	// Sing in with popup
	const signInWithGoogle = () => {
		signInWithPopup(auth, provider).then((result) => {
			localStorage.setItem('isAuth', true)
			const user = result.user
			setIsAuth(user)
			push('/dashboard')
		})
	}

	// Sign out
	const logOut = () => {
		signOut(auth).then(() => {
			localStorage.removeItem('isAuth')
			setIsAuth(null)
			push('/login')
		})
	}

	/* console.log('Firebase Auth Context', isAuth)
	console.log('Current User', currentUser?.providerData[0]?.displayName) */

	// Listen for auth state changes
	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user))

		// clean up
		return unsub
	}, [])

	return (
		<AppContext.Provider
			value={{ isAuth, setIsAuth, signInWithGoogle, logOut, currentUser }}
		>
			{children}
		</AppContext.Provider>
	)
}

// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }

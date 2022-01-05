import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDpYwYRCTpr30pvDbIS3WtFo7cs0RkldeM',
	authDomain: 'news-app-with-next.firebaseapp.com',
	projectId: 'news-app-with-next',
	storageBucket: 'news-app-with-next.appspot.com',
	messagingSenderId: '789493238834',
	appId: '1:789493238834:web:2c4c887436c1b3bb57802b',
	measurementId: 'G-CC5RT39E0X',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

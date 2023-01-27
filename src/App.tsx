import { getAuth, onAuthStateChanged } from 'firebase/auth'

import Calendar from 'pages/Calendar'
import Memo from 'pages/Memo'
import SignInPage from 'pages/SignInPage'
import SignUpPage from 'pages/SignUpPage'
import { Routes, Route } from 'react-router-dom'

function App() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const userData = user
            console.log(userData)
        } else {
            console.log('hihi')
        }
    })

    return (
        <>
            <Routes>
                <Route path="/" element={<Calendar />} />
                <Route path="/memo" element={<Memo />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </>
    )
}

export default App

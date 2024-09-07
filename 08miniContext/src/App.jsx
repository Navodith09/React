import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1 className='p-5 text-3xl'>React Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

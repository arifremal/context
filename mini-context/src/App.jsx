
import './App.css'
import Login from './components/Login'
import Profille from './components/Profille'
import UserContextProvider from './context/UserContextProvider'

function App() {
 

  return (
    <UserContextProvider>
<h1 className='text-2xl text-black bg-amber-200'>Raect killller Share</h1>
<Login></Login>
<Profille></Profille>
    </UserContextProvider>
  )
}

export default App

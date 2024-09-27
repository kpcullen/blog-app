import Login from './components/Login'
import Homepage from './components/Homepage'
import { useUserValue } from './contexts/UserContext'

const App = () => {
  const user = useUserValue()

  return <div>{user ? <Homepage user={user} /> : <Login />}</div>
}

export default App

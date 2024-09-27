import { useContext } from 'react'
import './App.css'
import Dashboard from './routes/DashboardRoutes'
import LoginRoutes from './routes/LoginRoutes'
import { Context } from './context/AuthContext'

function App() {
  const {token} = useContext(Context)
  if(token) {
    return <Dashboard/>
  }
  else{
    return <LoginRoutes/>
  }
}

export default App

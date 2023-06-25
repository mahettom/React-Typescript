import './App.css'
import { UserContextProvider } from './components/context/UserContext'
import { Counter } from './components/state/UseReducerStrict'
import { User } from './components/context/User'




function App() {


  return (
    <>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
      <Counter/>
    </>
  )
}

export default App

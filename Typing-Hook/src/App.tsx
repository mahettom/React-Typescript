import './App.css'
import { UserContextProvider } from './components/context/UserContext'
import { Counter } from './components/state/UseReducerStrict'
import { User } from './components/context/User'
import { MutableRef } from './components/ref/MutableRef'



function App() {


  return (
    <>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
      <Counter/>
      <MutableRef/>
    </>
  )
}

export default App

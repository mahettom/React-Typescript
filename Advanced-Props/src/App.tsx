import './App.css'
import { Heading } from './components/Heading'
import { Status } from './components/Status'
import { Oscar } from './components/Oscar'
import { Greet } from './components/Greet'

function App() {

  return (
    <>
      <Greet name='Tom' isLoggedIn={false} />
      <Status status='loading' />
      <Oscar>
        <Heading>Oscar goes to Rami Malek!</Heading>
      </Oscar>
    </>
  )
}

export default App

import './App.css'
import { Heading } from './components/Heading'
import { Status } from './components/Status'
import { Oscar } from './components/Oscar'

function App() {

  return (
    <>
      <Status status='loading' />
      <Oscar>
        <Heading>Oscar goes to Rami Malek!</Heading>
      </Oscar>
    </>
  )
}

export default App

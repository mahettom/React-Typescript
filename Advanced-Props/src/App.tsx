import './App.css'
import { Heading } from './components/Heading'
import { Status } from './components/Status'
import { Oscar } from './components/Oscar'
import { Greet } from './components/Greet'
import { Button } from './components/Button'

function App() {

  return (
    <>
      <Greet name='Tom' isLoggedIn={false} />
      <Status status='loading' />
      <Oscar>
        <Heading>Oscar goes to Rami Malek!</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log('button click', event, id);
      }}/>
    </>
  )
}

export default App

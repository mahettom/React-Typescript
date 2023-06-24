import './App.css'
import { Oscar } from './components/Oscar'
import { Greet } from './components/Greet'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Container } from './components/Container'

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

      <Input value='' handleChange={(event) => console.log(event)}/>
      <Container styles={{border: '1rem solid black', padding: '1rem'}}/>
    </>
  )
}

export default App

import './App.css'
import { Oscar } from './components/Oscar'
import { Greet } from './components/Greet'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Container } from './components/Container'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'
import { List } from './components/generics/List'

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

      <Private isLoggedIn={true} Component={Profile} />

      <List
        items={[1 , 2, 3 ]}
        onClick={(item) => console.log(item)}
      />

      <List
        items={['value1', 'value2', 'value3' ]}
        onClick={(item) => console.log(item)}
      />

      <List
        items={[
          {
            first: 'bruce',
            last: 'Wayne',
          },
          {
            first: 'Mr',
            last: 'Alfred',
          },
          {
            first: 'Chrianstian',
            last: 'Bale',
          }
        ]}
        onClick={(item) => console.log(item)}
      />
    </>
  )
}

export default App

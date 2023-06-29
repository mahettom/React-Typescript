// import { RandomNumber } from './components/restriction/RandomNumber'
// import { Toast } from './components/templateLiterals/Toast'
// import { Container } from './components/Container'
// import { Heading } from './components/Heading'
// import { Status } from './components/Status'
// import { Button } from './components/Button'
// import { Oscar } from './components/Oscar'
// import { Greet } from './components/Greet'
// import { Input } from './components/Input'
import { CustomButton } from './components/html/Button'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'
import { List } from './components/generics/List'
import './App.css'

function App() {

  return (
    <>
      {/* <Greet name='Tom' isLoggedIn={false} />
      <Status status='loading' />

      <Oscar>
        <Heading>Oscar goes to Rami Malek!</Heading>
      </Oscar>

      <Button handleClick={(event, id) => {
        console.log('button click', event, id);
      }}/>

      <Input value='' handleChange={(event) => console.log(event)}/>

      <Container styles={{border: '1rem solid black', padding: '1rem'}}/>

      <RandomNumber value={10} isPositive />

      <Toast position='left-center' /> */}

      <Private isLoggedIn={true} Component={Profile} />

      <CustomButton variant='primary' onClick={() => console.log('clicked')}>Primary button</CustomButton>
      
      
      <List
        items={[1 , 2, 3 ]}
        onClick={(item) => console.log(item)}
      />

      <List
        items={['value1', 'value2', 'value3' ]}
        onClick={(item) => console.log(item)}
      />

      {/* <List
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
      /> */}
    </>
  )
}

export default App

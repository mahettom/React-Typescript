import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'

function App() {

  const personName = {
    first: 'Christian',
    last: 'Bale',
  }

  const nameList = [
    {
      first: 'John',
      last: 'David Washigton',
    },
    {
      first: 'Anya',
      last: 'Taylor Joy',
    },
    {
      first: 'Rami',
      last: 'Malek',
    },
    {
      first: 'Margot',
      last: 'Robbie',
    }
  ]

  return (
    <>
      <Greet name='Tom' messageCount={10} isLoggedIn={false} />
      <Person name={personName}/>
      <PersonList  names={nameList} />
    </>
  )
}

export default App

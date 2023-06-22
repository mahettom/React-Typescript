import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'

function App() {

  const personName = {
    first: 'Christian',
    last: 'Bale',
  }

  return (
    <>
      <Greet name='Tom' messageCount={10} isLoggedIn={false} />
      <Person name={personName}/>
    </>
  )
}

export default App

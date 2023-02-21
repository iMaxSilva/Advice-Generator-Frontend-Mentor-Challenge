import { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Main from './components/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles />
      <Main />
    </>
  )
}

export default App

import { useState } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Main from './components/Main'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles />
      <ToastContainer autoClose={2000} />
      <Main />
    </>
  )
}

export default App

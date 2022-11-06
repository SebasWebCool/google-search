import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Route from './components/Routers'
import './App.css'

function App() {

  const [darkTheme, setDarkTheme] = useState(true)
  const [typeSearch, setTypeSearch] = useState('a')
  const [home, setHome] = useState(true)
  // const [results, setResults] = useState()



  return (
    <div className={darkTheme ? 'App dark' : 'App'}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 flex flex-col justify-between align-middle">

        <Navbar home={home} setHome={setHome} typeSearch={typeSearch} setTypeSearch={setTypeSearch} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Route setHome={setHome} home={home} setTypeSearch={setTypeSearch} typeSearch={typeSearch} />
        <Footer />


      </div>
    </div>
  )
}

export default App

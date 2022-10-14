import { useState } from 'react'
import reactLogo from './assets/react.svg'
import  Navbar from './components/Navbar'
import  Footer from './components/Footer'
import  Route from './components/Routers'
import './App.css'
import Search from './components/Search'

function App() {

  const [darkTheme, setDarkTheme] = useState(true)
  const [typeSearch, setTypeSearch] = useState('a')


  
  return (
    <div className={ darkTheme ? `dark App` : `App`}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        
        <Navbar typeSearch={typeSearch} setTypeSearch={setTypeSearch} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Route setTypeSearch={setTypeSearch} typeSearch={typeSearch}/>
        <Footer/>

      </div>
    </div>
  )
}

export default App

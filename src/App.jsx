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
  const [home, setHome] = useState(true)

  
  return (
    <div className={  darkTheme && home  ? `App dark h-screen`
                    : darkTheme ? `dark App `  
                    : darkTheme == false ? 'App h-screen'
                    : 'App'
                                }>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 h-full flex flex-col justify-between align-middle">
        
        <Navbar setHome={setHome} typeSearch={typeSearch} setTypeSearch={setTypeSearch} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Route setHome={setHome} home={home} setTypeSearch={setTypeSearch} typeSearch={typeSearch}/>
        <Footer/>


      </div>
    </div>
  )
}

export default App

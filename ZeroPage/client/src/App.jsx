
import Descrip from './components/Descrip'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <div >
      <div className=' flex-col mx-auto bg-backColor max-w-[1440px]'>
      <Navbar/>
      <Descrip/>
      <Experience/>
      <Projects/>
      </div>
    </div>
  )
}

export default App

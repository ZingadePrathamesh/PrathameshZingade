import '../src/App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Services from './components/Services';
import Skills from './components/Skills';
import Statistics from './components/Statistics';
import StillHere from './components/StillHere';

function App() {

  return (
    <div>
      <Navbar/>
      <Profile/>
      <Services/>
      <Skills/>
      <Statistics/>
      <StillHere/>
    </div>

  )
}

export default App

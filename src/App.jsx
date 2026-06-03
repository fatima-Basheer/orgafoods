import { useState } from 'react'
import HomeSection from './sections/HomeSection'
import './App.css'
import OurStory from './sections/OurStory'
import Origin from './sections/Origin'
import Selection from './sections/Selection'
import Footer from './sections/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
<>
 <HomeSection/>
 <OurStory/>
 <Origin/>
 <Selection/>
 <Footer/>
</>
  )
}

export default App

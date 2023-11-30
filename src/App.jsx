import { useContext } from 'react'
import { CifradoContext } from './Context/Cifrado'
import TextCifrar from './components/TextCifrar/TextCifrar.jsx'
import './App.css'
import TextEncriptado from './components/TextEncriptado/TextEncriptado.jsx'
import TextDesencriptado from './components/TextDesencriptado/TextDesencriptado.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import SinText from './components/SinText/SinText.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const { encrypted, decrypted } = useContext(CifradoContext)

  return (
    <>
      <Navbar />
      <main>
        <div className='wrapper'>
          <TextCifrar />
          {!encrypted && !decrypted && <SinText />}
          {encrypted && <TextEncriptado />}
          {decrypted && <TextDesencriptado />}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App

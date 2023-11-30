import logo from '../../assets/Vector.png'
import './navbar.css'
const Navbar = () => {
  return (
    <header className='encabezado'>
      <nav className='navbar'>
        <div className='brand'>
          <img
            src={logo}
            alt=''
            className='logo'
          />
        </div>
        <div className='nombre-brand'>
          <h1>Encriptador</h1>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

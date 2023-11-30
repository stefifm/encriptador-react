import robot from '../../assets/robot.gif'
import './sinText.css'
const SinText = () => {
  return (
    <div className='caja_sin_text'>
      <img
        src={robot}
        alt=''
        className='robot'
      />
      <div className='sin_text__texto'>
        <h2 className='sin_text__titulo'>Ningún mensaje fue encontrado</h2>
        <p className='sin_text__parrafo'>Ingresa el texto que desees encriptar o desencriptar</p>
      </div>
    </div>
  )
}

export default SinText

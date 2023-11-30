import { useContext } from 'react'
import { CifradoContext } from '../../Context/Cifrado'
import './textCifrar.css'
const TextCifrar = () => {
  const { text, handleTextChange, handleEncrypt, handleDecrypt } = useContext(CifradoContext)
  return (
    <section className='texto_cifrado'>
      <form className='cifrado_form'>
        <textarea
          value={text}
          onChange={handleTextChange}
          className='cifrado_form__input'
          placeholder='Ingrese el texto aqui'></textarea>
        <div className='btn_group'>
          <div className='btn_group__text'>
            <span className='text_alert'>&#9888; Solo letras minúsculas y sin acentos</span>
          </div>
          <div className='btn_group__btn'>
            <button
              className='btn btn_encriptado'
              onClick={handleEncrypt}>
              Encriptar
            </button>
            <button
              className='btn btn_desencriptado'
              onClick={handleDecrypt}>
              Desencriptar
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default TextCifrar

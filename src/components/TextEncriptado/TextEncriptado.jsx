import { useContext } from 'react'
import { CifradoContext } from '../../Context/Cifrado'

const TextEncriptado = () => {
  const { encryptedText, handleCopyEncrypt } = useContext(CifradoContext)
  return (
    <section className='texto_encriptado'>
      <form className='form_encriptado'>
        <textarea
          name=''
          id=''
          value={encryptedText || ''}
          readOnly
          className='texto_encriptado__input'></textarea>
        <button
          className='btn btn-copy'
          onClick={handleCopyEncrypt}>
          Copiar
        </button>
      </form>
    </section>
  )
}

export default TextEncriptado

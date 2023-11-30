import { useContext } from 'react'
import { CifradoContext } from '../../Context/Cifrado'

const TextDesencriptado = () => {
  const { decryptedText, handleCopyDecrypt } = useContext(CifradoContext)
  return (
    <section className='texto_desencriptado'>
      <form className='form_desencriptado'>
        <textarea
          className='texto_desencriptado__input'
          value={decryptedText || ''}
          readOnly></textarea>
        <button
          className='btn btn-copy'
          onClick={handleCopyDecrypt}>
          Copiar
        </button>
      </form>
    </section>
  )
}

export default TextDesencriptado

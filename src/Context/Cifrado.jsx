import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const CifradoContext = createContext()

export const CifradoProvider = ({ children }) => {
  const [text, setText] = useState('')
  const [encryptedText, setEncryptedText] = useState('')
  const [decryptedText, setDecryptedText] = useState('')

  const [encrypted, setEncrypted] = useState(false)
  const [decrypted, setDecrypted] = useState(false)

  const handleTextChange = (e) => {
    e.target.value = e.target.value.toLowerCase()
    setText(e.target.value)
  }

  const encrypt = () => {
    let textoEncriptado = text.replace(/[eéèëê]/gim, 'enter')
    textoEncriptado = textoEncriptado.replace(/[iíìïî]/gim, 'imes')
    textoEncriptado = textoEncriptado.replace(/[aáàäâ]/gim, 'ai')
    textoEncriptado = textoEncriptado.replace(/[oóòöô]/gim, 'ober')
    textoEncriptado = textoEncriptado.replace(/[uúùüû]/gim, 'ufat')

    textoEncriptado = textoEncriptado.replace(/[ñ]/, 'n')
    textoEncriptado = textoEncriptado.replace(/['|°¬!^`~"#$%&/()Çç=?¿{}_,.´+<>¡¨*:;]/gim, '')
    textoEncriptado = textoEncriptado.replace(/[^[a-z\s]+$]/gim, '')

    setEncryptedText(textoEncriptado)
    setEncrypted(true)
    setDecrypted(false)
  }

  const decrypt = () => {
    let newText = text.replace(/enter/gim, 'e')
    newText = newText.replace(/imes/gim, 'i')
    newText = newText.replace(/ai/gim, 'a')
    newText = newText.replace(/ober/gim, 'o')
    newText = newText.replace(/ufat/gim, 'u')

    setDecryptedText(newText)
    setDecrypted(true)
    setEncrypted(false)
  }

  const handleEncrypt = (e) => {
    e.preventDefault()
    encrypt()
  }

  const handleDecrypt = (e) => {
    e.preventDefault()
    decrypt()
  }

  const handleCopyEncrypt = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(encryptedText)
  }

  const handleCopyDecrypt = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(decryptedText)
  }

  return (
    <CifradoContext.Provider
      value={{
        text,
        encryptedText,
        decryptedText,
        encrypted,
        decrypted,
        handleTextChange,
        handleEncrypt,
        handleDecrypt,
        handleCopyEncrypt,
        handleCopyDecrypt
      }}>
      {children}
    </CifradoContext.Provider>
  )
}

CifradoProvider.propTypes = {
  children: PropTypes.node.isRequired
}

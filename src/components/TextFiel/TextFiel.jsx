import { useState } from 'react'
import './TextFiel.css'

const TextFiel = (props) => {
  const placeholderModif = `${props.placeholder}...`

  const manejarCambio = (e) => {
    props.actualizar(e.target.value)
  }    
  return (
    <div className='campo-texto'>
      <label>{props.titulo}</label>
      <input 
        placeholder={placeholderModif} 
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  )
}
export default TextFiel
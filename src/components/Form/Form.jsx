import { useState } from 'react';
import './Form.css'
import TextFiel from '../TextFiel/TextFiel';
import OptionList from '../OptionList/OptionList';
import Button from '../Button/Button';
const Formulario = (props) => {
  const [nombre, setNombre] = useState("")
  const [puesto, setPuesto] = useState("")
  const [foto, setFoto] = useState("")

  const [equipo, setEquipo] = useState("")

  const envio = (e) => {
    e.preventDefault()
    let datosEviados = {
      nombre,
      puesto,
      foto,
      equipo
    }
    console.log(datosEviados);
  }
  return (
    <section className="formulario">
      <form onSubmit={envio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <TextFiel 
          titulo="Nombre" 
          placeholder="Ingresar nombre" 
          required 
          valor={nombre} 
          actualizar={setNombre}
        />
        <TextFiel 
          titulo="Puesto" 
          placeholder="Ingresar puesto" 
          required 
          valor={puesto}
          actualizar={setPuesto}
          />
        <TextFiel 
          titulo="Foto" 
          placeholder="Ingresar enlace de foto" 
          required 
          valor={foto}
          actualizar={setFoto}
          />
        <OptionList
          valor={equipo}
          setEquipo={setEquipo}
          equipo={equipo}
          // equipos={props.equipos}
        />
        <Button texto="crear"/>
      </form>
    </section>
  )
}

export default Formulario;
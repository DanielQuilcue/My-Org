// import { useState, useEffect } from 'react'
import './OptionList.css'

const OptionList = (props) => {
  const manejarSelector = (e) => {
    console.log(e.target.value);
    props.setEquipo(e.target.value)
  }
  
  const team = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión"
  ]
  return <div className="optionList">
    <label>Equipos</label>
    <select value={props.valor} onChange={manejarSelector}>
    <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
      {
        team.map((team, index) =>
          <option key={index} value={team}>{team}</option>
        )
      }
    </select>
  </div>
}

export default OptionList
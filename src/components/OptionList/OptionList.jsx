import './OptionList.css'

const OptionList = () => {

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
    <select>
      {
        team.map((team, index) =>
          <option key={index}>{team}</option>
        )
      }
    </select>
  </div>
}

export default OptionList
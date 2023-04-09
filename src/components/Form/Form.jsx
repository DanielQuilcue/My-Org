import './Form.css'
import TextFiel from '../TextFiel/TextFiel';
import OptionList from '../OptionList/OptionList';
import Button from '../Button/Button';
const Formulario = (props) => {
  return (
    <section className="formulario">
      <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <TextFiel titulo="Nombre" placeholder="Ingresar nombre" required/>
        <TextFiel titulo="Puesto" placeholder="Ingresar puesto" required/>
        <TextFiel titulo="Foto" placeholder="Ingresar enlace de foto" required />
        <OptionList />
        <Button texto="crear"/>
      </form>
    </section>
  )
}

export default Formulario;
import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg';
function App() {
  const [mostrarFormulario, setmostrarFormulario] = useState(true)

  const mostrarEstado = () => {
    setmostrarFormulario(false)
  }
  return (
    <div>
    <Header />
    {mostrarFormulario && <Form />}
    <MyOrg mostrarEstado={mostrarEstado}/>
    </div>
  );
}

export default App;
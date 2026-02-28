import Header from "./assets/Components/Header/Header"
import Section from "./assets/Components/Section/Section"
import Form from "./assets/Components/Form/Form"
import { useState } from "react"


function App() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")
  const [profissao, setProfissao] = useState("")

    const [mostrarBtns, setMostrarBtns] = useState(false)

  return (
    <>
    <Header />
      <Form 
        nome={nome}
        setNome={setNome}
        idade={idade}
        setIdade={setIdade}
        email={email}
        setEmail={setEmail}
        profissao={profissao}
        setProfissao={setProfissao}
        setMostrarBtns={setMostrarBtns}
      />

      <Section 
        nome={nome}
        idade={idade}
        email = {email}
        profissao={profissao}
        mostrarBtns={mostrarBtns}
      />
    </>
  )
}


export default App



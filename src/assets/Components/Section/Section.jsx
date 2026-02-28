import "./Section.css"
import { useState } from "react"

  
    function Section({nome, idade, profissao, email, mostrarBtns}){
      const [mostrarNome, setMostrarNome] = useState(false) 
      const [mostrarIdade, setMostrarIdade] = useState(false) 
      const [mostrarProfissao, setMostrarProfissao] = useState(false) 
      const [mostrarEmail, setMostrarEmail] = useState(false)

    

    function toggle(setter) { 
      setter(prev => !prev) 
    }

    return (
    <>
      <div id="section">
        <h1>Component SECTION</h1>
        <p>Olá {nome}</p>
        <p>Você tem {idade} anos</p>
        <p>Seu email é: {email}</p>
        <p>Sua profissão é: {profissao}</p>
      </div>

      {mostrarBtns && (
  <div id="btns">

    <button onClick={() => toggle(setMostrarNome)}>
      Clique pra mostrar nome
    </button>
    {mostrarNome && <p>{nome}</p>}

    <button onClick={() => toggle(setMostrarIdade)}>
      Clique pra mostrar idade
    </button>
    {mostrarIdade && <p>{idade}</p>}

    <button onClick={() => toggle(setMostrarProfissao)}>
      Clique pra mostrar profissão
    </button>
    {mostrarProfissao && <p>{profissao}</p>}

    <button onClick={() => toggle(setMostrarEmail)}>
      Clique pra mostrar peso
    </button>
    {mostrarEmail && <p>{email}</p>}

  </div>
)}
    </>
  )
}


export default Section
import "./Section.css"

function Section({ nome, idade, profissao }) {
  return (
    <>
        <div id="section">
            <h1>Component SECTION (usando props)</h1>    
            <p>Olá {nome}</p>
            <p>Você tem {idade} anos</p>
            <p>Você tem a profissão de {profissao}</p>
        </div>
    </>

  )
}


export default Section
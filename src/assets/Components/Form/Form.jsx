
import "./Form.css"

function Form({
  nome, setNome,
  idade, setIdade,
  profissao, setProfissao,
  email, setEmail,
  setMostrarBtns
}) {



  function handleSubmit(e){
    e.preventDefault()
    console.log("Enviado!")
     setMostrarBtns(true)
  }

  return (
    <div id="form">
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="nome">Nome:</label>
          <input 
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="idade">Idade:</label>
          <input 
            type="text"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">email:</label>
          <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="profissao">profissão:</label>
          <input 
            type="text"
            value={profissao}
            onChange={(e) => setProfissao(e.target.value)}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Form
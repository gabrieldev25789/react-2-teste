import Header from "./assets/Components/Header/Header"
import Section from "./assets/Components/Section/Section"


function App() {

  return (
    <>
    <Header />
    <Section 
    nome="Gabriel"
    idade={23}
    profissao="programador"/>
    <Section 
    nome="Julia"
    idade={17}
    profissao = "estudante"/>
    </>
  )

}

export default App



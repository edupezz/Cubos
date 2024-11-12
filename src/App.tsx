
import { MainContainer } from "./AppStyles"
import { Header } from "./ui/organisms/Header"

function App() {

  return (
    <MainContainer>
      <Header />
      <div style={{gridArea: 'content'}}>Content</div>
      <div style={{gridArea: 'footer'}}>Footer</div>
    </MainContainer>
  )
}

export default App

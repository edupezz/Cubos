
import { MainContainer } from "./AppStyles"
import Content from "./ui/organisms/Content"
import { Header } from "./ui/organisms/Header"

function App() {

  return (
    <MainContainer>
      <Header />
      <Content />
      <div style={{gridArea: 'footer'}}>Footer</div>
    </MainContainer>
  )
}

export default App

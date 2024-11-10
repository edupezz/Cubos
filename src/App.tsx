
import { MainContainer } from "./AppStyles"

function App() {

  return (
    <MainContainer>
      <div style={{gridArea: 'header'}}>Header</div>
      <div style={{gridArea: 'content'}}>Content</div>
      <div style={{gridArea: 'footer'}}>Footer</div>
    </MainContainer>
  )
}

export default App

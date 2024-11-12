
import { MainContainer } from "./AppStyles"
import SearchComponent from "./ui/molecules/SearchComponent"
import { Header } from "./ui/organisms/Header"

function App() {

  return (
    <MainContainer>
      <Header />
      <div style={{gridArea: 'content'}}><SearchComponent /></div>
      <div style={{gridArea: 'footer'}}>Footer</div>
    </MainContainer>
  )
}

export default App

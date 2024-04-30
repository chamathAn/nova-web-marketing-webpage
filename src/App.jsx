import Intro from "./Intro"
import Bar from "./Bar"
import Features from './Features'
import Findout from "./Findout"
import Footer from "./Footer"

function App() {

  return (
    <>
      <header>
        <Bar />
        <div id="id">
        <Intro />
        </div>
      </header>
      <main>
        <div id="features">
        <Features />
        </div>
        <div id="work">
        <Findout />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App

import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Work from "./pages/Work"
import NotFound from "./components-home/NotFound"
import Project from "./components-work/Project"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/work" element={<Work />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="/work/project/:id" element={<Project />}/>
      </Routes>
    </>
  )
}

export default App

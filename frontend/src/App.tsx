import './App.css'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'
import ShowPage from './pages/ShowPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/new" element={<CreatePage/>}></Route>
        <Route path="/edit/:id" element={<EditPage/>}></Route>
        <Route path="/show/:id" element={<ShowPage/>}></Route>
      </Routes>
    </>
  )
}

export default App

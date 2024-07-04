import { Routes, Route } from 'react-router-dom'
import Main from './components/Main/Main'
import MainCatalog from './components/Catalog/MainCatalog'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/catalog" element={<MainCatalog />}></Route>
        </Routes>
    )
}
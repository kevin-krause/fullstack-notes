import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotesListPage from '../src/pages/NotesListPage'
import NotePage from '../src/pages/NotePage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<NotesListPage />} />
                <Route path="note/:id" element={<NotePage />} />
            </Routes>
        </Router>
    )
}

export default App

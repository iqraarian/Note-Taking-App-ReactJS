import { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddNote from './pages/AddNote'
import NoteDetail from './pages/NoteDetail'
import NotFound from './pages/NotFound'

export default function App() 
{
  const [notes, setNotes] = useState([])
  useEffect(() => {
    const savedNotes=localStorage.getItem('notes')
    if (savedNotes) setNotes(JSON.parse(savedNotes))
  }, [])
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = useCallback((title, content) => {
    const newNote = 
    {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString()
    }
    setNotes(prev => [...prev, newNote])
  }, [])

  const deleteNote=useCallback(id => {
    setNotes(prev => prev.filter(note => note.id !== id))
  }, [])
  return (
    <Router basename="/">
  <Navbar />
  <main style={{ padding: '20px' }}> {/* Added wrapper for content */}
    <Routes>
      <Route path="/" element={<Home notes={notes} deleteNote={deleteNote} />} />
      <Route path="/add" element={<AddNote addNote={addNote} />} />
      <Route path="/note/:id" element={<NoteDetail notes={notes} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
</Router>
  )
}
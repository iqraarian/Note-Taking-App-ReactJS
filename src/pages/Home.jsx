import { Link } from 'react-router-dom'
export default function Home({ notes, deleteNote }) 
{
  return (
    <div className="container">
      <h1>My Notes</h1>
      {notes.length === 0 ? (
        <p>No notes yet. Add one!</p>
      ) : (
        <ul className="notes-list">
          {notes.map(note => (
            <li key={note.id}>
              <Link to={`/note/${note.id}`}>{note.title}</Link>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
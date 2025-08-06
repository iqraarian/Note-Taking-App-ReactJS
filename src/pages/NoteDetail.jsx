import { useParams } from 'react-router-dom'
export default function NoteDetail({ notes }) 
{
  const { id } = useParams()
  const note = notes.find(n => n.id === Number(id))
  if (!note) return <div>Note not found</div>
  return (
    <div className="container">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <small>{new Date(note.createdAt).toLocaleString()}</small>
    </div>
  )
}
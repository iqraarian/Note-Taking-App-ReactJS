import { useRef, useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';

export default function AddNote({ addNote }) 
{
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addNote(title, content);
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Add New Note</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={titleRef}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Save Note</button>
      </form>
    </div>
  );
}
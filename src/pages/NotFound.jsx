import { Link } from 'react-router-dom'
export default function NotFound() 
{
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  )
}
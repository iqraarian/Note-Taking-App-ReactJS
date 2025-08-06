import { NavLink } from 'react-router-dom'
export default function Navbar() 
{
  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
        Home
      </NavLink>
      <NavLink to="/add" className={({ isActive }) => isActive ? 'active' : ''}>
        Add Note
      </NavLink>
    </nav>
  )
}
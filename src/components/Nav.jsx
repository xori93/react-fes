import{ Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/user/ronaldo">Ronaldo</Link>
      <Link to="/user/messi">Messi</Link>
      <Link to="/user/br4gg">David Bragg</Link>
      {/* <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/contact">Contact</Link> */}
    </nav>
  )
}

export default Nav
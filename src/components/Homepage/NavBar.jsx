import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = ({ styles, user, handleLogout }) => {
  const { navStyle } = styles
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/blogs" as="span">
            <Link style={navStyle} to="/blogs">
              Blogs
            </Link>
          </Nav.Link>
          <Nav.Link href="/users" as="span">
            <Link style={navStyle} to="/users">
              Users
            </Link>
          </Nav.Link>
          <Navbar.Text>
            <em>{user.username} is logged in</em>
          </Navbar.Text>
          <Nav.Link>
            <Button variant="outline-primary" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar

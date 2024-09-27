import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserContainer = ({ user }) => {
  return (
    <Container>
      <h2>{user.username}</h2>
      <h3>Added blogs</h3>
      <ul>
        {user.blogs.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <li>{blog.title}</li>
          </Link>
        ))}
      </ul>
    </Container>
  )
}
export default UserContainer

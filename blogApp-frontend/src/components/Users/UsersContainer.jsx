import { Container, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UsersContainer = ({ users }) => {
  return (
    <Container>
      <h3>Users of BlogApp</h3>
      <Table striped>
        <thead>
          <tr>
            <th>Username</th>
            <th>Blogs added</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default UsersContainer

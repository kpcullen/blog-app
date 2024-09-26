import { Button, Container, Form } from 'react-bootstrap'
import Notification from '../Notification'
import Togglable from '../Togglable'
import Signup from '../Signup'

const LoginFormContainer = ({ loginFormRef, handleLogin }) => {
  return (
    <Container>
      <Notification />
      <h2>BlogApp Login</h2>
      <Togglable buttonLabel="Create an account" ref={loginFormRef}>
        <Signup loginFormRef={loginFormRef} />
      </Togglable>

      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control type="text" name="username" />
        </Form.Group>

        <Form.Group>
          <Form.Label>password:</Form.Label>
          <Form.Control type="password" name="password" />
        </Form.Group>

        <Button className="my-2" variant="primary" type="submit">
          login
        </Button>
      </Form>
    </Container>
  )
}

export default LoginFormContainer

import { useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useUserDispatch } from '../contexts/UserContext'
import { useNotificationDispatch } from '../contexts/NotificationContext'
import useSignup from '../hooks/useSignup'
import useLogin from '../hooks/useLogin'
import blogService from '../services/blogs'
import Notification from './Notification'
import useNotification from '../hooks/useNotifcation'

const Login = () => {
  const [signupActive, setSignupActive] = useState(false)
  const userDispatch = useUserDispatch()
  const notificationDispatch = useNotificationDispatch()
  const { loginMutation } = useLogin()
  const { signupMutation } = useSignup()
  const notify = useNotification()

  const handleLogin = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get('username')
    const password = formData.get('password')
    loginMutation.mutate({ username, password })
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('signupName')
    const username = formData.get('signupUsername')
    const password = formData.get('signupPassword')
    const confirmPassword = formData.get('confirmPassword')
    if (password !== confirmPassword) {
      notify('CONFIRM_PASSWORD')
    } else {
      signupMutation.mutate({ username, name, password })
      setSignupActive(false)
    }
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
      userDispatch({ type: 'LOGIN', payload: user })
    }
  }, [userDispatch])

  return (
    <Container>
      <Notification />
      <h2>BlogApp {!signupActive ? 'Login' : 'Signup'}</h2>
      {!signupActive && (
        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label>username:</Form.Label>
            <Form.Control type="text" name="username" />
          </Form.Group>

          <Form.Group>
            <Form.Label>password:</Form.Label>
            <Form.Control type="password" name="password" />
          </Form.Group>

          <Button className="mt-2" variant="primary" type="submit">
            login
          </Button>
          <span className="px-2">or</span>
          <Button
            className="mt-2"
            variant="primary"
            onClick={() => setSignupActive(true)}
          >
            sign up
          </Button>
        </Form>
      )}
      {signupActive && (
        <Form onSubmit={handleSignup}>
          <Form.Group>
            <Form.Label>name:</Form.Label>
            <Form.Control type="text" name="signupName" />
          </Form.Group>
          <Form.Group></Form.Group>
          <Form.Group>
            <Form.Label>username:</Form.Label>
            <Form.Control type="text" name="signupUsername" />
          </Form.Group>
          <Form.Group>
            <Form.Label>password:</Form.Label>
            <Form.Control type="password" name="signupPassword" />
          </Form.Group>
          <Form.Group>
            <Form.Label>confirm password:</Form.Label>
            <Form.Control type="password" name="confirmPassword" />
          </Form.Group>
          <Button className="mt-2" variant="primary" type="submit">
            submit
          </Button>
        </Form>
      )}
    </Container>
  )
}

export default Login

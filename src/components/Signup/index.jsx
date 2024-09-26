import { Button, Form } from 'react-bootstrap'
import useNotification from '../../hooks/useNotifcation'
import useSignup from '../../hooks/useSignup'
import { useRef } from 'react'

const Signup = ({ loginFormRef }) => {
  const notify = useNotification()
  const { signupMutation } = useSignup()
  const formRef = useRef()

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
      loginFormRef.current.toggleVisibility()
      formRef.current.reset()
    }
  }
  return (
    <Form ref={formRef} onSubmit={handleSignup}>
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
  )
}
export default Signup

import { Button, Form } from 'react-bootstrap'

const SignUpFormContainer = ({ formRef, handleSignup }) => {
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

export default SignUpFormContainer

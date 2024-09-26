import { Button, Form } from 'react-bootstrap'
import useNotification from '../../hooks/useNotifcation'
import useSignup from '../../hooks/useSignup'
import { useRef } from 'react'
import SignUpFormContainer from './SignUpFormContainer'

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
  return <SignUpFormContainer formRef={formRef} handleSignup={handleSignup} />
}
export default Signup

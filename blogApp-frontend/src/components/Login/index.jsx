import { useEffect, useRef } from 'react'
import { useUserDispatch } from '../../contexts/UserContext'
import useLogin from '../../hooks/useLogin'
import blogService from '../../services/blogs'
import LoginFormContainer from './LoginFormContainer'

const Login = () => {
  const userDispatch = useUserDispatch()
  const { loginMutation } = useLogin()
  const loginFormRef = useRef()

  const handleLogin = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get('username')
    const password = formData.get('password')
    loginMutation.mutate({ username, password })
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
    <LoginFormContainer loginFormRef={loginFormRef} handleLogin={handleLogin} />
  )
}

export default Login

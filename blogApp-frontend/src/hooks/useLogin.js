import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useUserDispatch } from '../contexts/UserContext'
import loginService from '../services/login'
import blogService from '../services/blogs'
import useNotification from './useNotifcation'

const useLogin = () => {
  const queryClient = useQueryClient()
  const userDispatch = useUserDispatch()
  const notify = useNotification()

  const loginMutation = useMutation({
    mutationFn: loginService.login,
    onSuccess: (user) => {
      queryClient.setQueryData('auth', user)
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
      blogService.setToken(user.token)
      userDispatch({ type: 'LOGIN', payload: user })
    },
    onError: () => {
      notify('LOGIN_ERROR')
    },
  })

  return { loginMutation }
}

export default useLogin

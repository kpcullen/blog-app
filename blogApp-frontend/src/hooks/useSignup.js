import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useUserDispatch } from '../contexts/UserContext'
import { useNotificationDispatch } from '../contexts/NotificationContext'
import signupService from '../services/signup'
import useNotification from './useNotifcation'

const useSignup = () => {
  const notify = useNotification()

  const signupMutation = useMutation({
    mutationFn: signupService.signup,
    onSuccess: (user) => {
      notify('USER_CREATED', user)
    },
    onError: (error) => {
      notify('GENERAL_ERROR', error.response.data.error)
    },
  })

  return { signupMutation }
}

export default useSignup

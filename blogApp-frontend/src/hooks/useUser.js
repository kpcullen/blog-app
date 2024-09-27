import { useQuery } from '@tanstack/react-query'
import usersServices from '../services/users'

const useUser = (id) => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => usersServices.getUser(id),
  })
  return { user, isLoading, error }
}

export default useUser

import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import usersServices from '../../services/users'
import { Container } from 'react-bootstrap'
import useUser from '../../hooks/useUser'
import UserContainer from './UserContainer'

const User = () => {
  const { id } = useParams()

  const { user, isLoading } = useUser(id)

  if (isLoading) return <div>Users is loading...</div>

  return <UserContainer user={user} />
}

export default User

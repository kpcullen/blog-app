import { useNotificationDispatch } from '../contexts/NotificationContext'

const useNotification = () => {
  const notificationDispatch = useNotificationDispatch()

  const notify = (type, payload) => {
    notificationDispatch({ type, payload })
    setTimeout(() => {
      notificationDispatch({ type: 'CLEAR' })
    }, 3000)
  }

  return notify
}

export default useNotification

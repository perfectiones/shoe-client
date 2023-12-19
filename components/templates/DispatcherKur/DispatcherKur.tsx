import { getUsers } from '@/app/api/admin'
import { $mode } from '@/context/mode'
import styles from '@/styles/admin/index.module.scss'
import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'

const DispatcherKur = () => {
  const mode = useStore($mode)
  const [users, setUsers] = useState([])
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    try {
      console.log(users)
      const data = await getUsers('/users/all')
      setUsers(data)
      console.log(users)
    } catch (error) {
      console.log(error)
    }
  }

  return <div className={styles.admin__users}>
    Kurier
  </div>
}

export default DispatcherKur
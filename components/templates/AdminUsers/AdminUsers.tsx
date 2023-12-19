import { getUsers } from '@/app/api/admin'
import { $mode } from '@/context/mode'
import styles from '@/styles/admin/index.module.scss'
import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'
import api from '../../../app/axiosClient'

const AdminUsers = () => {
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

  return (
    <div className={styles.admin__users}>
      <ul>
        {users.map((el, id) => (
          <li key={id} className={styles.admin__usersItem}>
            <div className={styles.admin__usersItem__name}>{el.username}</div>
            <div className={styles.admin__usersItem__role}>
              {el.status == null ? 'Пользователь' : el.status}
            </div>
            {el.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AdminUsers

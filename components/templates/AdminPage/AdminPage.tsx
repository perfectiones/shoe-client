/* eslint-disable arrow-body-style */
/* eslint-disable @next/next/no-img-element */
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import styles from '@/styles/admin/index.module.scss'
import AdminCatalog from '../AdminCataloge/AdminCatalog'
import { useState } from 'react'
import Link from 'next/link'
import AdminUsers from '../AdminUsers/AdminUsers'
import AdminDelivery from '../KladmanOrders/KladmanOrders'

function AdminPage() {
  const [tab1, setTab1] = useState(true)
  const [tab2, setTab2] = useState(false)
  const [tab3, setTab3] = useState(false)

  const handleTab1 = () => {
    setTab1(true)
    setTab2(false)
    setTab3(false)
  }

  const handleTab2 = () => {
    setTab1(false)
    setTab2(true)
    setTab3(false)
  }

  const handleTab3 = () => {
    setTab1(false)
    setTab2(false)
    setTab3(true)
  }
  return (
    <div className={styles.admin}>
      <header className={styles.admin__header}>
        <div className={`${styles.admin__headerBody} container`}>
          <div>Logo</div>
          <nav>
            <ul>
              <li>
                <p onClick={handleTab1}>Пользователи</p>
              </li>
              <li>
                <p onClick={handleTab3}>Заказы</p>
              </li>
              <li>
                <p onClick={handleTab2}>Товары</p>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container">
        {tab1 && <AdminUsers />}
        {tab2 && <AdminCatalog />}
        {tab3 && <AdminDelivery />}
      </div>
    </div>
  )
}

export default AdminPage
